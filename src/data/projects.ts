export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    slug: "sre-triage-swarm",
    title: "SRE & FinOps Triage Swarm",
    category: "AI Infrastructure",
    description: "Multi-agent system for automated incident investigation and cloud-budget-aware troubleshooting using hybrid retrieval with Qdrant + BM25.",
    stack: ["LangChain", "Qdrant", "FastAPI", "Streamlit"],
    github: "https://github.com/Aayush-pixel29/SRE-Autonomous"
  },
  {
    slug: "aura",
    title: "Aura",
    category: "AI Application",
    description: "Cross-platform AI companion with asynchronous Gemini-powered conversational workflows and Firebase-backed client caching.",
    stack: ["Gemini", "Firebase", "Async workflows"],
    github: "https://github.com/Aayush-pixel29/aura-app"
  },
  {
    slug: "recon-ai",
    title: "Recon AI",
    category: "Hackathon / Disaster Response",
    description: "Disaster-response system designed around offline-first communication and store-and-forward networking during connectivity failures.",
    stack: ["Next.js", "Leaflet", "Geolocation"],
    github: "https://github.com/Aayush-pixel29/recon-ai-buildathon"
  },
  {
    slug: "sentinel",
    title: "SENTINEL",
    category: "Developer Tools",
    description: "AI code verification layer combining AI analysis with security and quality checks.",
    stack: ["Gemini", "Semgrep", "CLI workflows", "VS Code extension", "developer verification"],
    github: "https://github.com/Aayush-pixel29/SENTINEL"
  },
  {
    slug: "permanent-qr",
    title: "Permanent QR",
    category: "Product Engineering",
    description: "Stable QR resolution concept for durable product links and cloud-backed media archives.",
    stack: ["Next.js", "QR", "Cloud"],
    github: "https://github.com/Aayush-pixel29/permanent-qr-demo"
  },
  {
    slug: "passion-protocol",
    title: "Passion Protocol",
    category: "Social / AI Product",
    description: "Product concept for matching people by interests and building goals rather than traditional resumes.",
    stack: ["Next.js", "React", "AI"],
    github: "https://github.com/Aayush-pixel29/passion-protocol"
  },
  {
    slug: "interview-agent",
    title: "Interview Agent",
    category: "AI Agents",
    description: "AI-driven interview workflow exploring structured interactions and automated evaluation.",
    stack: ["AI Agents", "Workflows", "Evaluation"],
    github: "https://github.com/Aayush-pixel29/Interview-Agent"
  },
  {
    slug: "indicdoc-vqa",
    title: "IndicDoc-VQA",
    category: "Vision-Language / Edge AI",
    description: "Offline-first VLM pipeline for extracting structured JSON from complex bilingual Marathi/English documents on local CPU infrastructure.",
    stack: ["Qwen2.5-VL", "Ollama", "FastAPI", "Docker"],
    github: "https://github.com/Aayush-pixel29/IndicDoc-VQA"
  },
  {
    slug: "edge-chest-xray",
    title: "Edge Chest X-Ray Triage",
    category: "Edge AI",
    description: "Offline medical-imaging prototype with INT8 TFLite inference, Grad-CAM explainability and a local voice copilot.",
    stack: ["TFLite", "XAI", "Edge AI", "Voice"],
    github: "https://github.com/Aayush-pixel29/edge-tb-triage"
  },
  {
    slug: "ai-traffic-analyzer",
    title: "AI Traffic Flow Analyzer",
    category: "Computer Vision",
    description: "Real-time vehicle detection, tracking, speed estimation and congestion analysis.",
    stack: ["YOLO", "BoT-SORT", "OpenCV", "PyTorch"],
    github: "https://github.com/Aayush-pixel29/AI-Traffic-Flow-Analyzer"
  }
];
