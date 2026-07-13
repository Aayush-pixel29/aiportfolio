export default function Toolkit() {
  const categories = [
    {
      name: "Languages",
      skills: ["Python", "C++", "Embedded C", "Java", "JavaScript", "SQL"]
    },
    {
      name: "AI & Machine Learning",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Librosa", "LangChain", "RAG / Vector Retrieval"]
    },
    {
      name: "Dev & Ops",
      skills: ["Docker", "Git/GitHub", "AWS", "GCP", "PostgreSQL", "Vercel"]
    },
    {
      name: "Hardware & IoT",
      skills: ["Arduino", "Raspberry Pi", "ESP8266", "ATmega", "TFLite/ONNX", "LoRa / GSM"]
    }
  ];

  return (
    <div className="w-full py-24 border-b border-border z-10 relative" id="toolkit">
      <h2 className="text-sm font-mono text-signal-cyan tracking-widest uppercase mb-12">
        {"//"} Toolkit
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat, i) => (
          <div key={i} className="flex flex-col">
            <h3 className="text-lg font-display text-white mb-6 border-b border-border pb-2">{cat.name}</h3>
            <ul className="flex flex-col gap-3">
              {cat.skills.map((skill, j) => (
                <li key={j} className="text-sm font-mono text-text-dim flex items-center gap-2">
                  <span className="w-1 h-1 bg-border rounded-full" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
