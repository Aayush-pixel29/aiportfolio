export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  highlights: string[];
  evidence?: string[];
}

export interface SkillCategory {
  title: string;
  verificationBadge?: string;
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
  title: 'AI Engineer · Systems Builder',
  roleHeadline: 'AI Engineer building production-ready AI systems, agents & intelligent products.',
  roleSubheadline:
    'I build agentic systems, computer-vision pipelines, developer tools and full-stack AI products — from architecture to deployment.',
  status: 'Available · AI/ML & Software Roles',
  location: 'Mumbai, Maharashtra, India',
  email: 'shelaraayush535@gmail.com',
  phone: '+91 91752 27454',
  githubUrl: 'https://github.com/Aayush-pixel29',
  linkedinUrl: 'https://www.linkedin.com/in/aayush-shelar-166b99249/',
  resumeUrl: '/resume.pdf',
  bioShort:
    'AI Engineer building production-ready AI systems, agents & intelligent products. Specializing in multi-agent swarms, edge computer vision, and full-stack AI applications.',
  bioLong:
    'AI Engineer specializing in agentic systems, computer-vision pipelines, developer tools, and full-stack AI products. With a rigorous engineering foundation spanning hardware fundamentals, machine learning, and modern web architectures, I engineer end-to-end resilient systems — from local edge models to production multi-agent swarms.',
  
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
    { label: 'Engineered Systems', value: '10', subtext: '4 Featured Flagships + 6 Specialized Domain Systems' },
    { label: 'Internships & Work', value: '3+', subtext: '3 Engineering Internships + Independent Product Work' },
    { label: 'Current Focus', value: '2026', subtext: 'Agentic AI, Edge Inference & Production Systems' },
  ],

  journey: [
    {
      period: '2022',
      title: 'Electronics & Embedded Hardware',
      description:
        'Hardware fundamentals: Microcontroller architecture, RTOS, sensor interfacing, and C/C++ data structures. Built low-level firmware foundations.',
      tags: ['Embedded Systems', 'Microcontrollers', 'C/C++', 'RTOS'],
    },
    {
      period: '2024',
      title: 'Python, ML & Computer Vision Pipelines',
      description:
        'Machine learning & deep vision: Deployed real-time YOLOv8 vehicle tracking, INT8 quantized edge models, and predictive ML classification pipelines.',
      tags: ['Python', 'YOLOv8', 'OpenCV', 'TFLite INT8', 'PyTorch'],
      evidence: ['IndicDoc-VQA', 'Edge Chest X-Ray Triage', 'AI Traffic Flow Analyzer'],
    },
    {
      period: '2025',
      title: 'AI Engineering, RAG & Full-Stack Systems',
      description:
        'Production systems: FastAPI microservices, vector databases (Qdrant), offline-first PWAs, and industrial Hardware-in-the-Loop (HIL) validation at SEDEMAC.',
      tags: ['FastAPI', 'Next.js', 'Vector DBs', 'HIL Testing', 'RAG'],
      evidence: ['Recon AI', 'SENTINEL', 'Doc-Gen API', 'SEDEMAC ECU'],
    },
    {
      period: '2026',
      title: 'Agentic AI & Autonomous Production Systems',
      description:
        'Autonomous systems: Multi-agent triage swarms, closed-loop trajectory learning, local Vision-Language Models (Qwen2.5-VL), and independent client software.',
      tags: ['Multi-Agent Swarms', 'LangChain', 'Local VLMs', 'Autonomous Systems'],
      evidence: ['SRE Triage Swarm', 'SkillFoundry', 'IndicDoc-VQA', 'Client Systems'],
    },
  ],

  skillMap: [
    {
      title: 'AI & Agentic Systems',
      verificationBadge: '4 Core Systems · RAG · Swarms',
      skills: [
        'Python',
        'LangChain',
        'Gemini API',
        'Qdrant Vector DB',
        'BM25 Hybrid Search',
        'RAG Architectures',
        'Multi-Agent Swarms',
        'Ollama',
        'PyTorch',
        'Transformers',
        'Prompt Engineering',
        'Evaluation Rubrics',
      ],
      evidence: ['SRE Triage Swarm', 'SkillFoundry', 'SENTINEL', 'Interview Agent'],
    },
    {
      title: 'Computer Vision & Edge AI',
      verificationBadge: '3 Deployed Pipelines · INT8',
      skills: [
        'YOLOv8',
        'OpenCV',
        'BoT-SORT Tracking',
        'TensorFlow Lite INT8',
        'Qwen2.5-VL',
        'Grad-CAM Saliency',
        'MediaPipe',
        'Local CPU Inference',
        'Quantization',
      ],
      evidence: ['IndicDoc-VQA', 'AI Traffic Analyzer', 'Edge Chest X-Ray'],
    },
    {
      title: 'Backend, APIs & Full-Stack',
      verificationBadge: '5 Deployed Architectures',
      skills: [
        'FastAPI',
        'Next.js 14/15',
        'React',
        'TypeScript',
        'Node.js',
        'PostgreSQL',
        'SQL',
        'Streamlit',
        'Tailwind CSS',
        'REST API Design',
        'Asynchronous Tasks',
      ],
      evidence: ['Doc-Gen API', 'Recon AI', 'Passion Protocol', 'SENTINEL'],
    },
    {
      title: 'Cloud, DevTools & Hardware',
      verificationBadge: 'CI/CD · Industrial HIL · Docker',
      skills: [
        'Docker',
        'Git & GitHub Actions',
        'Linux',
        'Semgrep AST Rules',
        'VS Code Extension API',
        'HIL Validation',
        'ESP8266 / Arduino',
        'Vercel & Render CI',
      ],
      evidence: ['SENTINEL VS Code Gate', 'SEDEMAC Mechatronics', 'Recon AI PWA'],
    },
  ],

  experience: [
    {
      period: 'NOW',
      role: 'Independent AI Engineer & Software Builder',
      company: 'Self-Employed / Freelance',
      highlights: [
        'Architecting custom AI agentic workflows, multi-agent swarms, and hybrid vector RAG systems.',
        'Building full-stack web products, robust developer tooling, and automated LLM pipelines.',
        'Consulting on computer vision and edge AI deployment for local/offline constraints.',
      ],
      evidence: ['Client Systems', 'Agentic Applications', 'Full-Stack Products'],
    },
    {
      period: 'DEC 2025 — MAY 2026',
      role: 'Product Support Engineer Intern',
      company: 'SEDEMAC Mechatronics',
      highlights: [
        'Hardware-in-the-loop (HIL) validation for automotive ECU controllers.',
        'Diagnostics, fault code analysis, and sensor anomaly tracking across mechatronic systems.',
        'Automated quality testing workflows and performance metric logging.',
      ],
      evidence: ['Automotive ECU Controllers', 'HIL Testing', 'Quality Engineering'],
    },
    {
      period: 'OCT — NOV 2025',
      role: 'Machine Learning Intern',
      company: 'Cognifyz Technologies',
      highlights: [
        'Python machine learning pipeline development, data preprocessing, and feature engineering.',
        'Model training, hyperparameter optimization, and predictive evaluation metrics.',
        'Delivered clean analytical outputs aligned with production performance constraints.',
      ],
      evidence: ['Model Pipelines', 'Feature Engineering', 'Evaluation Metrics'],
    },
    {
      period: 'JUN — JUL 2024',
      role: 'Student Developer Intern',
      company: 'Rapid System',
      highlights: [
        'Low-level firmware instructions on microcontrollers for industrial automation.',
        'Interfaced peripheral sensor matrices and communication protocols.',
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
      name: 'Computer Vision & Edge AI',
      description:
        'Real-time vehicle and object tracking with YOLO/OpenCV, INT8 quantized TFLite models for edge devices, and offline bilingual Vision-Language models.',
    },
    {
      number: '03',
      name: 'Full-Stack AI Products & APIs',
      description:
        'Production Next.js, React, TypeScript, FastAPI, and Node.js web applications built with ruthless speed, fluid responsive animations, and rock-solid database schemas.',
    },
    {
      number: '04',
      name: 'Developer Tools & Automation',
      description:
        'Custom CLI utilities, VS Code extensions, automated static security analysis gates, and continuous deployment workflows that multiply engineering velocity.',
    },
    {
      number: '05',
      name: 'Hardware & Embedded Foundation',
      description:
        'Firmware engineering for ESP8266, Raspberry Pi, and Arduino, combined with hardware-in-the-loop (HIL) testing and IoT telemetry dashboards.',
    },
  ],
};
