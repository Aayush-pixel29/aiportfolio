export interface Project {
  slug: string;
  number: string;
  category: string;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  caseStudy?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    slug: "sre-triage-swarm",
    number: "01",
    category: "AI Infrastructure",
    title: "SRE & FinOps Triage Swarm",
    description: "Multi-agent system for automated incident investigation and cloud-budget-aware troubleshooting using hybrid retrieval with Qdrant + BM25.",
    technologies: ["LangChain", "Qdrant", "FastAPI", "Streamlit"],
    github: "https://github.com/Aayush-pixel29/SRE-Autonomous",
    caseStudy: "/work/sre-triage-swarm",
    image: "/images/triagemesh.jpg"
  },
  {
    slug: "aura",
    number: "02",
    category: "AI Application",
    title: "Aura",
    description: "Cross-platform AI companion with asynchronous Gemini-powered conversational workflows and Firebase-backed client caching.",
    technologies: ["Gemini", "Firebase", "Async workflows"],
    github: "https://github.com/Aayush-pixel29/aura-app",
    caseStudy: "/work/aura",
    image: "/images/aura-app.png"
  },
  {
    slug: "recon-ai",
    number: "03",
    category: "Hackathon / Disaster Response",
    title: "Recon AI",
    description: "Disaster-response system designed around offline-first communication and store-and-forward networking during connectivity failures.",
    technologies: ["Next.js", "Leaflet", "Geolocation"],
    github: "https://github.com/Aayush-pixel29/recon-ai-buildathon",
    caseStudy: "/work/recon-ai",
    image: "/images/recon-ai.png"
  },
  {
    slug: "sentinel",
    number: "04",
    category: "Developer Tools",
    title: "SENTINEL",
    description: "AI code verification layer combining AI analysis with security and quality checks.",
    technologies: ["Gemini", "Semgrep", "VS Code", "CLI"],
    github: "https://github.com/Aayush-pixel29/SENTINEL",
    caseStudy: "/work/sentinel",
    image: "/images/citesynth.jpg" // Placeholder existing image
  },
  {
    slug: "permanent-qr",
    number: "05",
    category: "Product Engineering",
    title: "Permanent QR",
    description: "Stable QR resolution concept for durable product links and cloud-backed media archives.",
    technologies: ["Next.js", "QR", "Cloud"],
    github: "https://github.com/Aayush-pixel29/permanent-qr-demo",
    caseStudy: "/work/permanent-qr",
    image: "/images/cable-fault.png" // Placeholder
  },
  {
    slug: "passion-protocol",
    number: "06",
    category: "Social / Product",
    title: "Passion Protocol",
    description: "Product concept for matching people by interests and building goals rather than traditional resumes.",
    technologies: ["Next.js", "React", "AI"],
    github: "https://github.com/Aayush-pixel29/passion-protocol",
    caseStudy: "/work/passion-protocol",
    image: "/images/maitri.png" // Placeholder
  },
  {
    slug: "interview-agent",
    number: "07",
    category: "AI Agents",
    title: "Interview Agent",
    description: "AI-driven interview workflow exploring structured interactions and automated evaluation.",
    technologies: ["AI Agents", "Workflows", "Evaluation"],
    github: "https://github.com/Aayush-pixel29/Interview-Agent",
    caseStudy: "/work/interview-agent",
    image: "/images/cinematic_trail_bg.png" // Placeholder
  },
  {
    slug: "indicdoc-vqa",
    number: "08",
    category: "Vision-Language / Edge AI",
    title: "IndicDoc-VQA",
    description: "Offline-first VLM pipeline for extracting structured JSON from complex bilingual Marathi/English documents on local CPU infrastructure.",
    technologies: ["Qwen2.5-VL", "Ollama", "FastAPI", "Docker"],
    github: "https://github.com/Aayush-pixel29/IndicDoc-VQA",
    caseStudy: "/work/indicdoc-vqa",
    image: "/images/sentiment.png" // Placeholder
  },
  {
    slug: "edge-chest-xray",
    number: "09",
    category: "Edge AI",
    title: "Edge Chest X-Ray Triage",
    description: "Offline medical-imaging prototype with INT8 TFLite inference, Grad-CAM explainability and a local voice copilot.",
    technologies: ["TFLite", "Grad-CAM", "Voice copilot"],
    github: "https://github.com/Aayush-pixel29/edge-tb-triage",
    caseStudy: "/work/edge-chest-xray",
    image: "/images/xray-triage.jpg"
  },
  {
    slug: "ai-traffic-analyzer",
    number: "10",
    category: "Computer Vision",
    title: "AI Traffic Flow Analyzer",
    description: "Real-time vehicle detection, tracking, speed estimation and congestion analysis.",
    technologies: ["YOLO", "BoT-SORT", "OpenCV", "PyTorch"],
    github: "https://github.com/Aayush-pixel29/AI-Traffic-Flow-Analyzer",
    caseStudy: "/work/ai-traffic-analyzer",
    image: "/images/traffic.png"
  }
];
