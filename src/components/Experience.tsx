export default function Experience() {
  const experiences = [
    {
      role: "Product Support Engineer Intern",
      company: "SEDEMAC Mechatronics Ltd.",
      desc: "Assisted in testing and validating automotive electronic products, troubleshooting technical issues, preparing technical documentation, and supporting engineering teams. Gained hands-on experience with embedded automotive systems, quality assurance processes, and cross-functional collaboration in a fast-paced manufacturing environment.",
    },
    {
      role: "ML Model Training Intern",
      company: "Cognifyz Technologies",
      desc: "Worked on ML model training and deployment processes, analyzing datasets and optimizing predictive models.",
    },
    {
      role: "Event Head",
      company: "Developer Student Clubs (DSC) ECESA",
      desc: "Trained 1000+ students in technical workshops and organized Code Trix, fostering a strong local developer community.",
    }
  ];

  return (
    <div className="w-full py-24 border-b border-border z-10 relative" id="experience">
      <h2 className="text-sm font-mono text-signal-cyan tracking-widest uppercase mb-12">
        {"//"} Experience
      </h2>

      <div className="flex flex-col gap-8">
        {experiences.map((exp, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-12 relative group">
            <div className="absolute left-[-16px] md:left-[-24px] top-2 w-2 h-2 rounded-full bg-border group-hover:bg-signal-cyan transition-colors" />
            <div className="md:w-1/3">
              <h3 className="text-xl font-display font-medium text-white">{exp.role}</h3>
              <p className="text-signal-amber font-mono text-sm mt-1">{exp.company}</p>
            </div>
            <div className="md:w-2/3">
              <p className="text-text-dim leading-relaxed text-sm md:text-base">
                {exp.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
