import fs from 'fs';
import { VoyageAIClient } from 'voyageai';

const VOYAGE_API_KEY = process.env.VOYAGE_API_KEY;

if (!VOYAGE_API_KEY) {
  console.error("Please set VOYAGE_API_KEY environment variable");
  process.exit(1);
}

const client = new VoyageAIClient({ apiKey: VOYAGE_API_KEY });

async function generateEmbeddings() {
  console.log("Reading context data...");
  const rawData = fs.readFileSync('./src/data/portfolio_context.json', 'utf8');
  const contextData = JSON.parse(rawData);

  const texts = contextData.map(item => item.text);

  console.log(`Generating embeddings for ${texts.length} chunks...`);
  
  try {
    const response = await client.embed({
      input: texts,
      model: "voyage-3-lite"
    });

    const embeddings = response.data.map(item => item.embedding);

    const indexedData = contextData.map((item, index) => ({
      ...item,
      embedding: embeddings[index]
    }));

    fs.writeFileSync('./src/data/vector_index.json', JSON.stringify(indexedData, null, 2));
    console.log("Successfully generated and saved vector_index.json");
  } catch (error) {
    console.error("Error generating embeddings:", error);
  }
}

generateEmbeddings();
