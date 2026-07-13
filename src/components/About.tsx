export default function About() {
  const stats = [
    { label: "Systems shipped end-to-end", value: "9+" },
    { label: "Hackathons (incl. ISRO SIH)", value: "3" },
    { label: "Students reached via workshops", value: "1000+" },
    { label: "Internships (Hardware & ML)", value: "2" },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row gap-12 md:gap-24 py-24 border-b border-border z-10 relative">
      
      {/* Left: Bio */}
      <div className="flex-1">
        <h2 className="text-3xl font-display font-medium mb-6 text-white">
          I build AI systems that hold up outside the demo.
        </h2>
        <p className="text-lg text-text-dim leading-relaxed font-sans">
          Offline-capable, edge-optimized, and designed for the moment the network drops. 
          Recent Electronics & Computer Engineering graduate; my work spans multimodal emotion 
          AI for astronaut support, disaster-response coordination over mesh networks, and 
          multi-agent literature synthesis.
        </p>
      </div>

      {/* Right: Stat Chips */}
      <div className="flex-1 grid grid-cols-2 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="signal-card p-6 flex flex-col justify-center">
            <div className="text-3xl font-display text-signal-cyan mb-2">{stat.value}</div>
            <div className="text-sm font-mono text-text-dim">{stat.label}</div>
          </div>
        ))}
      </div>

    </div>
  );
}
