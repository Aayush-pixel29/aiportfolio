export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  highlights: string[];
  evidence?: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
  evidence: string[];
}

export interface JourneyMilestone {
  period: string;
  title: string;
  description: string;
  tags: string[];
  evidence?: string[];
}

export interface EducationInfo {
  degree: string;
  institution: string;
  period: string;
  cgpa: string;
  achievements: string[];
}

export const PROFILE = {
  name: 'Aayush Shelar',
  handle: 'Aayush-pixel29',
  title: 'Software Engineer · AI Builder',
  status: 'Available · Independent Freelancer',
  location: 'Mumbai, Maharashtra, India',
  email: 'shelaraayush535@gmail.com',
  phone: '+91 91752 27454',
  githubUrl: 'https://github.com/Aayush-pixel29',
  linkedinUrl: 'https://www.linkedin.com/in/aayush-shelar-166b99249/',
  resumeUrl: '/resume.pdf',
  bioShort:
    'A software and AI builder who turns ideas into working products. Specializing in AI agents, edge systems, full-stack architectures, and computer vision.',
  bioLong:
    'A hybrid engineer with a software-first direction. With extensive experience across electronics, embedded systems, machine learning, and modern web architectures, I engineer end-to-end resilient systems—from hardware interfaces to production multi-agent AI swarms.',
  
  education: {
    degree: 'B.Tech, Electronics and Computer Engineering',
    institution: 'Sharad Institute of Technology, Maharashtra',
    period: 'July 2022 — June 2026',
    cgpa: '7.05 / 10',
    achievements: [
      "Co-registered holder of a Design under India's Designs Act (Weed Control Device, Design No. 478508-001)",
      'Competed at DIPEX and Electrovert technical events with Team TRINETRA/ETESA',
    ],
  },

  metrics: [
    { label: 'Students Impacted', value: '1,500+', subtext: 'via technical training & university developer events' },
    { label: 'Flagship Projects', value: '10', subtext: 'engineered across AI, edge, vision & full-stack' },
    { label: 'Engineering Roles', value: '4+', subtext: 'industrial support, machine learning & hardware' },
    { label: 'Current Focus', value: '2026', subtext: 'independent freelance & production AI agents' },
  ],

  journey: [
    {
      period: '2022 — 2026',
      title: 'Electronics & Computer Engineering',
      description:
        'Hardware fundamentals: Electronics → Embedded → Programming. Deep focus on microcontroller architecture, RTOS, sensor integration, and data structures.',
      tags: ['Embedded Systems', 'Industrial Automation', 'Data Structures', 'C/C++'],
    },
    {
      period: '2024 — 2025',
      title: 'Software + ML → Complete Products',
      description:
        'Building the foundation: Software → Machine Learning → AI. Deploying localized vision models, INT8 edge inference pipelines, and computer vision trackers.',
      tags: ['Python', 'Machine Learning', 'Computer Vision', 'Edge AI'],
      evidence: ['IndicDoc-VQA', 'Edge Chest X-Ray Triage', 'AI Traffic Flow Analyzer'],
    },
    {
      period: '2025 — 2026',
      title: 'Industrial Engineering + AI Engineering',
      description:
        'Production and scaling: Multi-agent systems, developer tools, hardware-in-the-loop validation at SEDEMAC Mechatronics and Cognifyz Technologies.',
      tags: ['Multi-Agent Swarms', 'Developer Tools', 'HIL Validation', 'RAG'],
      evidence: ['SRE Triage Swarm', 'Aura', 'SENTINEL', 'Interview Agent'],
    },
    {
      period: 'NOW',
      title: 'Independent Freelancer / AI & Software Builder',
      description:
        'Current focus: Product Engineering → Freelancing. Partnering with visionary founders and engineering teams to ship production agentic software, developer tools, and client automation.',
      tags: ['Agentic Applications', 'Developer Tools', 'Full-Stack Systems', 'Freelancer'],
      evidence: ['Permanent QR', 'Passion Protocol'],
    },
  ],

  skillMap: [
    {
      title: 'AI / Machine Learning',
      skills: [
        'Python',
        'PyTorch',
        'TensorFlow',
        'Scikit-learn',
        'OpenCV',
        'MediaPipe',
        'Transformers',
        'LLMs',
        'RAG',
        'Agents',
        'Embeddings',
        'Computer Vision',
        'Qdrant',
        'Ollama',
      ],
      evidence: ['SRE Triage', 'IndicDoc-VQA', 'Edge Chest X-Ray', 'Traffic Analyzer'],
    },
    {
      title: 'Software / Full-Stack',
      skills: [
        'TypeScript',
        'JavaScript',
        'React',
        'Next.js',
        'Node.js',
        'FastAPI',
        'Java',
        'C/C++',
        'SQL',
        'PostgreSQL',
        'REST APIs',
        'Streamlit',
        'Tailwind CSS',
      ],
      evidence: ['SENTINEL', 'Aura', 'Permanent QR', 'Recon AI'],
    },
    {
      title: 'Cloud & Developer Tools',
      skills: [
        'Git & GitHub',
        'Linux',
        'Docker',
        'AWS',
        'Google Cloud',
        'Firebase',
        'CI/CD',
        'VS Code Tooling',
        'CLI Workflows',
        'Automated Testing',
      ],
      evidence: ['SRE Triage Swarm', 'SENTINEL', 'IndicDoc-VQA'],
    },
    {
      title: 'Systems & Hardware',
      skills: [
        'ATmega',
        'ESP8266',
        'Raspberry Pi',
        'Arduino',
        'HIL Validation',
        'Sensor Integration',
        'IoT Architecture',
        'Fault Diagnostics',
        'Embedded Systems',
      ],
      evidence: ['SEDEMAC', 'Rapid System', 'Edge Chest X-Ray'],
    },
  ],

  experience: [
    {
      period: 'NOW',
      role: 'Independent Freelancer / AI & Software Builder',
      company: 'Self-Employed',
      highlights: [
        'Architecting custom AI agentic workflows, multi-agent swarms, and RAG systems.',
        'Building full-stack web products, robust developer tools, and automation pipelines.',
        'Consulting on computer vision and edge AI deployment for resource-constrained environments.',
      ],
      evidence: ['Client Systems', 'Agentic Applications', 'Full-Stack Products'],
    },
    {
      period: 'DEC 2025 — MAY 2026',
      role: 'Product Support Engineer Intern',
      company: 'SEDEMAC Mechatronics',
      highlights: [
        'Hardware-in-the-loop (HIL) validation for automotive ECU controllers.',
        'Diagnostics and anomaly analysis across high-reliability mechatronic systems.',
        'Automated quality testing workflows and performance metric logging.',
      ],
      evidence: ['Automotive ECU', 'HIL Testing', 'Quality Engineering'],
    },
    {
      period: 'OCT — NOV 2025',
      role: 'Machine Learning Intern',
      company: 'Cognifyz Technologies',
      highlights: [
        'Python machine learning pipeline development and data preprocessing.',
        'Model training, hyperparameter optimization, and predictive evaluation.',
        'Delivering analytical outputs aligned with production performance constraints.',
      ],
      evidence: ['Model Pipelines', 'Feature Engineering', 'Evaluation Metrics'],
    },
    {
      period: 'JUN — JUL 2024',
      role: 'Student Developer Intern',
      company: 'Rapid System',
      highlights: [
        'Low-level firmware instructions on microcontrollers for industrial automation.',
        'Interfacing peripheral sensor matrices and communication protocols.',
      ],
      evidence: ['Microcontroller Firmware', 'Hardware Protocols'],
    },
    {
      period: '2024 — 2025',
      role: 'Event Head',
      company: 'Developer Student Clubs / ECESA',
      highlights: [
        'Organized university-wide technical bootcamps, hackathons, and hands-on workshops.',
        'Trained and mentored over 1,500+ engineering students in modern development and AI.',
      ],
      evidence: ['1,500+ Students Impacted', 'Developer Community Leadership'],
    },
  ],

  services: [
    {
      number: '01',
      name: 'AI & Agentic Systems',
      description:
        'Multi-agent autonomous swarms, hybrid retrieval RAG pipelines, Qdrant/BM25 integration, and local or cloud LLM orchestration tailored for enterprise workflows.',
    },
    {
      number: '02',
      name: 'Full-Stack Web Products',
      description:
        'Production Next.js, React, TypeScript, FastAPI, and Node.js web applications built with ruthless speed, fluid responsive animations, and rock-solid database schemas.',
    },
    {
      number: '03',
      name: 'Computer Vision & Edge AI',
      description:
        'Real-time vehicle and object tracking with YOLO/OpenCV, INT8 quantized TFLite models for edge devices, and offline bilingual Vision-Language models.',
    },
    {
      number: '04',
      name: 'Developer Tools & Automation',
      description:
        'Custom CLI utilities, VS Code extensions, automated static security analysis gates, and continuous deployment workflows that multiply engineering velocity.',
    },
    {
      number: '05',
      name: 'Hardware & Embedded Software',
      description:
        'Firmware engineering for ESP8266, Raspberry Pi, and Arduino, combined with hardware-in-the-loop (HIL) testing and IoT telemetry dashboards.',
    },
  ],
};
