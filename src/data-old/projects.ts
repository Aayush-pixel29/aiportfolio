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
  problem?: string;
  approach?: string;
  architecture?: string;
  engineeringDecisions?: string;
  result?: string;
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
    image: "/images/triagemesh.webp",
    problem: "Incident investigation and cloud cost optimization often require manual correlation of logs, metrics, and billing data, slowing down resolution.",
    approach: "Designed a multi-agent swarm architecture to autonomously query logs, infrastructure state, and FinOps data to isolate root causes and suggest remediations.",
    architecture: "Uses LangChain for orchestration, Qdrant for vector search, and BM25 for hybrid retrieval, wrapped in a FastAPI backend with a Streamlit interface.",
    engineeringDecisions: "Opted for hybrid retrieval (Qdrant + BM25) to ensure exact matches on log IDs/metrics while preserving semantic search for unstructured incident descriptions.",
    result: "Significantly reduced MTTR (Mean Time To Resolution) for simulated outages and provided actionable cloud budget optimizations."
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
    image: "/images/aura-app.webp",
    problem: "Standard AI companions often lack persistent context across sessions and suffer from slow sequential API calls.",
    approach: "Built a cross-platform companion focused on asynchronous processing and aggressive client-side caching to improve perceived latency.",
    architecture: "Integrates the Gemini API with Firebase for real-time state synchronization and local caching strategies.",
    engineeringDecisions: "Decoupled the message sending from the AI processing loop (async workflows) so the UI remains unblocked while the model generates responses.",
    result: "Achieved a highly responsive user experience with seamless cross-device synchronization."
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
    image: "/images/recon-ai.webp",
    problem: "During natural disasters, traditional communication networks fail, leaving responders without situational awareness.",
    approach: "Developed a resilient, offline-first communication platform that queues data when disconnected and syncs automatically when a connection is restored.",
    architecture: "Built with Next.js PWA capabilities, utilizing Leaflet for local mapping, and IndexedDB for the store-and-forward message queue.",
    engineeringDecisions: "Prioritized a store-and-forward architecture over real-time WebSockets to guarantee message delivery regardless of intermittent connectivity.",
    result: "Successfully demonstrated resilient data transmission under simulated network blackouts during the buildathon."
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
    image: "/images/citesynth.webp",
    problem: "Static analysis tools flag syntax errors but often miss logical vulnerabilities or architectural flaws that require semantic understanding.",
    approach: "Combined traditional static analysis (Semgrep) with LLM-powered semantic analysis (Gemini) in a unified developer tool.",
    architecture: "CLI and VS Code extension architecture that pipes code context through local linters before querying the AI for deeper security analysis.",
    engineeringDecisions: "Integrated Semgrep as a first-pass filter to reduce expensive LLM API calls, only querying the AI for complex logical paths.",
    result: "Created a robust verification pipeline that catches both syntax-level and semantic-level vulnerabilities before they are committed."
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
    image: "/images/cable-fault.webp",
    problem: "Physical QR codes on products often break when the underlying URL or domain structure changes over time.",
    approach: "Engineered a stable resolution layer that decouples the physical QR code from the destination URL, allowing dynamic redirection.",
    architecture: "A Next.js edge-based redirection engine backed by a cloud database to map static QR IDs to dynamic media archives.",
    engineeringDecisions: "Used Edge Functions for the resolution layer to ensure sub-50ms redirects globally without spinning up cold servers.",
    result: "Provides a durable, lifelong link for physical products that survives marketing campaigns and domain migrations."
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
    image: "/images/maitri.webp",
    problem: "Traditional networking platforms optimize for job titles and pedigrees rather than actual shared interests and building goals.",
    approach: "Designed a social matching protocol that leverages AI to connect users based on the semantic similarity of their side projects and passions.",
    architecture: "Next.js frontend with an AI backend that generates embeddings of user profiles to calculate matching distances.",
    engineeringDecisions: "Focused on high-quality UX and matching algorithms over traditional timeline feeds to encourage actual collaboration.",
    result: "A functional product concept that rethinks how builders find co-founders and collaborators."
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
    image: "/images/cinematic_trail_bg.webp",
    problem: "Technical screening is time-consuming and often subject to human bias or inconsistent questioning.",
    approach: "Built an autonomous agent capable of conducting structured technical interviews, adapting questions based on the candidate's real-time answers.",
    architecture: "A multi-step state machine that orchestrates the interview flow, evaluates responses, and compiles a final scoring rubric.",
    engineeringDecisions: "Used strict JSON schema enforcement for the AI outputs to ensure the evaluation criteria could be systematically parsed and aggregated.",
    result: "Demonstrated a viable proof-of-concept for automated, unbiased technical screening."
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
    image: "/images/sentiment.webp",
    problem: "Processing sensitive, bilingual (Marathi/English) government or medical documents via cloud APIs violates data privacy regulations.",
    approach: "Engineered a completely offline, local Vision-Language Model pipeline capable of extracting structured data without internet access.",
    architecture: "Containerized deployment using Docker, FastAPI for the endpoint, and Ollama serving Qwen2.5-VL optimized for CPU inference.",
    engineeringDecisions: "Quantized the model to INT8/INT4 to fit within consumer hardware constraints while maintaining acceptable accuracy for OCR and VQA.",
    result: "Successfully extracted complex tables and bilingual text offline, ensuring 100% data privacy."
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
    image: "/images/xray-triage.webp",
    problem: "Rural clinics lack reliable internet and expert radiologists, making immediate triage of chest X-rays difficult.",
    approach: "Deployed an edge-optimized AI triage system that runs completely offline, augmented with a voice interface for hands-free operation.",
    architecture: "INT8 quantized TensorFlow Lite model for inference, paired with Grad-CAM for visual explainability, running on constrained edge devices.",
    engineeringDecisions: "Prioritized explainability (Grad-CAM) over raw accuracy, as doctors needed to see *why* the model predicted an anomaly before trusting it.",
    result: "Proved that complex medical inference and explainability can run efficiently on low-power edge hardware."
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
    image: "/images/traffic.webp",
    problem: "City traffic management systems often rely on expensive hardware sensors rather than leveraging existing CCTV feeds.",
    approach: "Built a software-based computer vision pipeline that analyzes standard video feeds to detect vehicles, estimate speed, and monitor congestion.",
    architecture: "YOLO for object detection, BoT-SORT for multi-object tracking, and OpenCV for perspective transformation and speed calculation.",
    engineeringDecisions: "Implemented perspective transformation to accurately map pixel-distance to real-world meters for speed estimation from angled cameras.",
    result: "A highly accurate, real-time traffic analysis dashboard that can process standard IP camera streams."
  }
];
