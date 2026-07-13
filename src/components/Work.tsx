import { ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    title: "TriageMesh",
    desc: "Disaster survivor triage and dispatch over BLE mesh, for zero-connectivity environments. Fuses a multimodal severity model with a bipartite dispatch engine weighting severity (0.40), panic signal (0.25), aging (0.20), and keyword flags (0.15) to route responders.",
    tags: ["edge AI", "mesh networking", "dispatch optimization"],
    github: "https://github.com/Aayush-pixel29/TriageMesh",
    live: null
  },
  {
    title: "SRE/FinOps Triage Swarm",
    desc: "LangChain multi-agent system for incident triage, using hybrid Qdrant + BM25 retrieval to pull the right runbooks and cost signals in real time.",
    tags: ["LangChain", "hybrid retrieval", "multi-agent"],
    github: "https://github.com/Aayush-pixel29/SRE-Autonomous",
    live: "https://sre-autonomous-a9hzadwyp5owatpdzr3gnu.streamlit.app/"
  },
  {
    title: "edge-tb-triage",
    desc: "Chest X-ray triage on-device, no cloud round-trip. MobileNetV2 + TFLite transfer learning, built to mirror the rural/offline deployment constraints real diagnostic tools face in the field.",
    tags: ["TFLite", "computer vision", "on-device ML"],
    github: "https://github.com/Aayush-pixel29/edge-tb-triage",
    live: null
  },
  {
    title: "MAITRI",
    desc: "Offline multimodal emotion AI for astronaut mental-health support (ISRO Smart India Hackathon). MobileNetV2 for facial analysis, GRU for voice emotion, optimized to run fully offline via TFLite/ONNX.",
    tags: ["multimodal", "offline-first", "SIH"],
    github: "https://github.com/Aayush-pixel29/MAITRI",
    live: null
  },
  {
    title: "Recon AI",
    desc: "Offline-first disaster coordination platform leveraging Next.js and Leaflet.js to map and coordinate emergency response efforts without relying on stable internet.",
    tags: ["Next.js", "Leaflet.js", "offline-first"],
    github: "https://github.com/Aayush-pixel29/Recon-AI-Prototype",
    live: null
  },
  {
    title: "Aura",
    desc: "Cross-platform AI wellness companion built with Flutter and Dart. Uses Gemini Pro API for conversational support and Firebase for local caching.",
    tags: ["Flutter", "Gemini Pro", "Firebase"],
    github: "https://github.com/Aayush-pixel29/aura-app",
    live: null
  },
  {
    title: "AI Traffic Flow Detector",
    desc: "YOLOv8-based real-time congestion and anomaly detection system for smart city traffic management.",
    tags: ["YOLOv8", "computer vision", "real-time"],
    github: "https://github.com/Aayush-pixel29/AI-Traffic-Flow-Analyzer",
    live: null
  },
  {
    title: "Cable Fault Detection & Monitoring",
    desc: "An embedded and IoT system for underground cable faults, proving hardware integration capabilities.",
    tags: ["IoT", "Embedded C", "Sensors"],
    github: "https://drive.google.com/drive/folders/1brQHI2ju_9VCsWMrJ1aiuH4VE-EFXqwR",
    live: null
  },
  {
    title: "Real-Time Sign Language & Emotion Detector",
    desc: "Real-time system that detects sign language gestures and facial emotions from live video. Combines computer vision and deep learning to interpret hand signs and facial expressions.",
    tags: ["computer vision", "deep learning", "HCI"],
    github: "https://github.com/Aayush-pixel29/Real-Time-AI-Sign-Language-Emotion-Detector",
    live: null
  },
  {
    title: "Financial Sentiment Analysis",
    desc: "NLP pipeline that turns financial news into quantified market sentiment. Processes articles, cleans text and applies sentiment models to extract positive/negative market signals.",
    tags: ["NLP", "sentiment analysis", "FinTech"],
    github: "https://github.com/Aayush-pixel29/financial-sentiment-analysis",
    live: null
  }
];

export default function Work() {
  return (
    <div className="w-full py-24 border-b border-border z-10 relative" id="work">
      <h2 className="text-sm font-mono text-signal-cyan tracking-widest uppercase mb-12">
        {"//"} Selected Work
      </h2>

      {/* Feature Slot: CiteSynth */}
      <div className="signal-card w-full mb-8 flex flex-col md:flex-row gap-8 items-start hover:border-signal-amber transition-colors">
        <div className="flex-1">
          <h3 className="text-3xl font-display font-medium text-white mb-4">CiteSynth</h3>
          <p className="text-text-dim leading-relaxed mb-6">
            Claude-orchestrated multi-agent literature synthesis. Planner → retrieval → synthesis → critic pipeline producing citation-grounded Evidence Cards. Key design: retrieval-before-reasoning with claim-to-passage binding, so every claim the system makes is independently checkable against the source — not just plausible-sounding. Built at a Life Sciences hackathon.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {["multi-agent", "RAG", "NLI verification", "Claude"].map((tag) => (
              <span key={tag} className="tech-tag">{tag}</span>
            ))}
          </div>
          <div className="flex gap-4">
            <span className="text-sm text-text-dim font-mono border-b border-text-dim border-dashed pb-1">
              GitHub Repo (Pending)
            </span>
          </div>
        </div>
      </div>

      {/* Grid Slots */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="signal-card flex flex-col h-full hover:border-signal-cyan transition-colors">
            <h3 className="text-2xl font-display font-medium text-white mb-3">{p.title}</h3>
            <p className="text-text-dim text-sm leading-relaxed mb-6 flex-1">
              {p.desc}
            </p>
            <div className="flex flex-wrap gap-2 mb-6 mt-auto">
              {p.tags.map(tag => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>
            <div className="flex items-center gap-4 border-t border-border pt-4">
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer" className="text-text hover:text-white flex items-center gap-2 text-sm font-medium">
                  <Code2 size={16} /> Source
                </a>
              )}
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" className="text-text hover:text-signal-cyan flex items-center gap-2 text-sm font-medium ml-auto">
                  Live Demo <ExternalLink size={16} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
