import { NextRequest, NextResponse } from "next/server";
import { VoyageAIClient } from "voyageai";
import { GoogleGenerativeAI } from "@google/generative-ai";
import vectorData from "@/data/vector_index.json";

// Cosine similarity helper
function cosineSimilarity(vecA: number[], vecB: number[]) {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }
  if (normA === 0 || normB === 0) return 0;
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    const userMessage = messages[messages.length - 1].content;

    if (!process.env.VOYAGE_API_KEY || !process.env.GOOGLE_API_KEY) {
      return NextResponse.json(
        { error: "API keys are not configured properly." },
        { status: 500 }
      );
    }

    // 1. Embed the user query using Voyage AI
    console.log("Calling Voyage AI...");
    const voyageClient = new VoyageAIClient({ apiKey: process.env.VOYAGE_API_KEY });
    const embedResponse = await voyageClient.embed({
      input: [userMessage],
      model: "voyage-3-lite"
    });
    console.log("Voyage AI Success.");
    
    const queryEmbedding = embedResponse.data?.[0]?.embedding || [];

    // 2. Perform cosine similarity search
    const results = vectorData.map((item: { text: string; embedding: number[] }) => ({
      ...item,
      score: cosineSimilarity(queryEmbedding, item.embedding || [])
    }));

    // Sort by highest score and take top 3
    results.sort((a, b) => b.score - a.score);
    const topContexts = results.slice(0, 3).map(item => item.text);
    const contextString = topContexts.join("\n\n");

    // 3. Generate response using Gemini
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

    const systemPrompt = `You are a helpful portfolio assistant for Aayush Shelar, an AI Engineer. 
Your goal is to answer questions about Aayush's work, skills, and experience based ONLY on the context provided below.
If the answer is not in the context, just say "I don't have that information, but you can contact Aayush directly."
Keep your answers concise, professional, and highlight his expertise in AI engineering, RAG, and systems design.

CONTEXT:
${contextString}`;

    // Note: the SDK for Gemini takes simple prompt text or history. We'll pass the system prompt as context.
    const prompt = `${systemPrompt}\n\nUser Question: ${userMessage}\n\nAnswer:`;
    
    console.log("Calling Gemini...");
    const result = await model.generateContent(prompt);
    console.log("Gemini Success.");
    const textResponse = result.response.text();

    return NextResponse.json({ role: "assistant", content: textResponse });

  } catch (error: unknown) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: (error as Error).message || "An error occurred during the chat request." },
      { status: 500 }
    );
  }
}
