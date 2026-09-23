export interface SkillGroup {
  category: string;
  items: string[];
  evidence: string[];
}

export const skills: SkillGroup[] = [
  {
    category: "AI / ML",
    items: [
      "Python", "PyTorch", "TensorFlow", "Scikit-learn", 
      "OpenCV", "MediaPipe", "Transformers", "LLMs", 
      "RAG", "Agents", "Embeddings", "Computer Vision"
    ],
    evidence: ["SRE Triage", "IndicDoc-VQA", "Edge AI", "Traffic Analyzer"]
  },
  {
    category: "Software / Full-stack",
    items: [
      "JavaScript", "TypeScript", "Java", "C/C++", "SQL",
      "React", "Next.js", "Node.js", "REST APIs",
      "JSON", "Streamlit", "MySQL"
    ],
    evidence: ["SENTINEL", "Aura", "Permanent QR", "Recon AI"]
  },
  {
    category: "Cloud / DevTools",
    items: [
      "Git", "GitHub", "Linux", "Docker", "AWS", "GCP", 
      "Firebase", "CI/CD", "VS Code tooling", "CLI workflows",
      "Testing", "Deployment"
    ],
    evidence: ["SRE Triage", "SENTINEL", "IndicDoc-VQA"]
  },
  {
    category: "Systems / Hardware",
    items: [
      "ATmega", "ESP8266", "Raspberry Pi", "Arduino",
      "HIL validation", "Sensor integration", "IoT",
      "Fault diagnostics", "Embedded systems", "Electronics"
    ],
    evidence: ["SEDEMAC", "Rapid System", "Edge Chest X-Ray"]
  }
];
