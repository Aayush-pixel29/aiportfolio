import { ProjectDetail } from '../ai-components/ProjectModal';

export const PROJECTS_DATA: ProjectDetail[] = [
  // =========================================================================
  // TIER 1: FEATURED FLAGSHIP SYSTEMS (TOP 5)
  // =========================================================================
  {
    id: 'sre-triage-swarm',
    number: '01',
    title: 'SRE & FinOps Triage Swarm',
    category: 'AI Infrastructure',
    year: '2026',
    featured: true,
    tier: 'featured',
    statusBadge: 'Production-Ready Architecture',
    tagline:
      'Multi-agent autonomous incident investigation and cloud-budget-aware troubleshooting using hybrid retrieval with Qdrant + BM25.',
    problem:
      'Incident investigation and cloud cost optimization often require manual correlation of logs, metrics, and billing telemetry across disconnected dashboards, creating prolonged Mean Time to Resolution (MTTR).',
    solution:
      'Designed a multi-agent swarm architecture to autonomously query logs, infrastructure state, and FinOps telemetry to isolate root causes and suggest remediations with verifiable evidence.',
    impact:
      'Cut simulated incident triage latency by 65% with hybrid vector search and automated cloud remediation proposals.',
    architecturalDecisions: [
      {
        decision: 'Hybrid Vector + Lexical Search (Qdrant + BM25)',
        rationale:
          'Dense vector embeddings capture semantic intent while BM25 guarantees exact keyword hits on cryptic error codes, log UUIDs, and service names.',
      },
      {
        decision: 'Multi-Agent Role Specialization (LangChain)',
        rationale:
          'Separates log triage, infrastructure telemetry queries, and cloud billing analysis into discrete agent roles, avoiding prompt bloat and hallucination.',
      },
      {
        decision: 'FastAPI Backend + Streamlit Dashboard',
        rationale:
          'Decouples high-throughput async agent evaluation pipelines from interactive incident triage review.',
      },
    ],
    measurableResults: [
      '65% reduction in simulated incident triage latency compared to manual correlation across 3+ dashboards.',
      '100% precision on exact log error code retrieval via hybrid BM25 reciprocal rank fusion (RRF).',
      'Automated FinOps proposal generation identifying anomalous cost spikes within sub-3-second latency.',
    ],
    tools: ['LangChain', 'Qdrant Vector DB', 'BM25', 'FastAPI', 'Streamlit', 'Python'],
    deliverables: [
      'Autonomous Multi-Agent Swarm',
      'Hybrid Vector + BM25 Retrieval',
      'Automated Root-Cause Diagnosis',
      'Cloud FinOps Cost Correlator',
    ],
    images: ['/images/sre-autonomous.jpg'],
    githubUrl: 'https://github.com/Aayush-pixel29/SRE-Autonomous',
    liveUrl: 'https://sre-autonomous-a9hzadwyp5owatpdzr3gnu.streamlit.app/',
  },
  {
    id: 'sentinel',
    number: '02',
    title: 'SENTINEL-X',
    category: 'AI Safety & DevTools',
    year: '2026',
    featured: true,
    tier: 'featured',
    statusBadge: 'Agent Security Control Plane',
    tagline:
      'AI Agent Reliability, Security & Verification Control Plane — local-first runtime enforcing deterministic tool policies, secret redaction, and CI/CD quality gates.',
    problem:
      'The marginal cost of generating AI code and agent workflows is plummeting toward zero, but the cost of verifying, securing, and trusting autonomous tool execution is skyrocketing.',
    solution:
      'Architected an open-source, local-first control plane that enforces deterministic tool security policies (ToolShield), redacts leaked credentials, manages execution idempotency & checkpoints, scores agent safety benchmarks, and verifies code before human approval.',
    impact:
      '44/44 passing security test suites, zero-latency credential interception, and automated CI/CD gating with human-in-the-loop evidence reports.',
    architecturalDecisions: [
      {
        decision: 'ToolShield Policy Engine & MCP Gateway',
        rationale:
          'Explicit tool registry (verified, trusted, unknown, blocked) enforcing ALLOW/DENY/REVIEW decisions with argument injection and path-traversal validation for Model Context Protocol (MCP) tool calls.',
      },
      {
        decision: 'Zero-Loss Output Sanitizer & Secret Redaction',
        rationale:
          'High-throughput regex and pattern interceptor redacting connection strings, bearer tokens, private keys, and API keys (OpenAI, Gemini, AWS, GitHub) before telemetry logging.',
      },
      {
        decision: 'Execution Manager & Checkpoint Resumption',
        rationale:
          'Ensures execution idempotency and saves state checkpoints to resume multi-step agent workflows seamlessly without duplicate side-effects.',
      },
      {
        decision: 'Multi-Engine Code & Security Verification',
        rationale:
          'Integrates Pytest, Semgrep AST rules, and Gitleaks into unified JSON (.sentinel/report.json) and Markdown telemetry artifacts.',
      },
    ],
    measurableResults: [
      '44/44 deterministic passing tests covering policy enforcement, red team attack simulations, and secret interception.',
      'Sub-millisecond secret interception and redaction across all streaming agent outputs and Model Context Protocol (MCP) gateways.',
      'Automated CI/CD quality gating generating structured .sentinel/report.json & .md evidence artifacts in under 5 seconds.',
    ],
    tools: ['Python 3.9+', 'ToolShield Engine', 'MCP Gateway', 'Semgrep AST', 'Gitleaks', 'FastAPI', 'VS Code API', 'Pytest'],
    deliverables: [
      'ToolShield Policy Engine (MCP-Ready)',
      'Zero-Loss Output Sanitizer',
      'Idempotent Execution Manager',
      'CI/CD Verification Quality Gate',
    ],
    images: ['/images/sentinel-x.jpg'],
    githubUrl: 'https://github.com/Aayush-pixel29/SENTINEL',
    liveUrl: 'https://sentinel-sigma-liard.vercel.app/',
  },
  {
    id: 'searchops',
    number: '03',
    title: 'SearchOps',
    category: 'Information Retrieval / Hybrid Search',
    year: '2026',
    featured: true,
    tier: 'featured',
    statusBadge: 'Production-Ready IR Platform',
    tagline:
      'Information Retrieval, Hybrid Ranking & Search Engineering Platform with real-time score decomposition and automated IR benchmark suite.',
    problem:
      'Generic RAG and search pipelines operate as black boxes, lacking quantitative ranking evaluations (Recall@K, MRR, nDCG@10) and fine-grained score inspection across competing retrieval algorithms.',
    solution:
      'Engineered a full-stack retrieval engineering platform to ingest multi-format collections, execute competing retrievers (BM25, Dense Cosine, Hybrid α-fusion, and Reranking), inspect multi-stage score decompositions in real time, and systematically benchmark ranking quality.',
    impact:
      'Achieved 0.922 Recall@10 and 1.000 MRR on transformer hybrid reranking with sub-50ms p50 latency and full score explainability.',
    architecturalDecisions: [
      {
        decision: 'Hybrid α-Fusion (BM25 + all-MiniLM-L6-v2)',
        rationale:
          'Blends lexical exact token matching with sentence-transformer vector cosine similarity via convex linear score fusion: Score = α · Dense + (1-α) · BM25.',
      },
      {
        decision: '"Why this result ranked #1" Inspector',
        rationale:
          'Decomposes real-time result scoring into Lexical %, Vector Semantics %, Hybrid fusion weighting (α), and candidate Cross-Encoder Reranker boosts.',
      },
      {
        decision: 'IR Evaluation & Benchmark Harness',
        rationale:
          'Automated evaluation suite computing Recall@5, Recall@10, Mean Reciprocal Rank (MRR), and nDCG@10 against labeled test sets with p50/p95 latency percentiles.',
      },
      {
        decision: 'Multi-Tenant Security & Graceful Degradation',
        rationale:
          'Enforces strict tenant partitioning on SQL and vector indices with resilient fallbacks (Redis → in-memory, reranker failure → hybrid fallback, offline hashed embeddings).',
      },
    ],
    measurableResults: [
      '0.922 Recall@10 and 1.000 MRR benchmarked on local sentence-transformers (all-MiniLM-L6-v2) + Cross-Encoder reranking.',
      '45.3ms p50 latency on full hybrid reranked retrieval pipeline with stage-by-stage waterfall tracing.',
      'Multi-tenant data partitioning supporting JSON, CSV, TXT, and Markdown chunk ingestion with sub-second index updates.',
    ],
    tools: ['Python', 'BM25', 'sentence-transformers', 'all-MiniLM-L6-v2', 'Cross-Encoder', 'FastAPI', 'Streamlit', 'Redis', 'IR Metrics'],
    deliverables: [
      'Hybrid Convex α-Fusion Engine',
      '"Why Ranked #1" Score Inspector',
      'Automated IR Evaluation Suite (Recall/MRR/nDCG)',
      'Multi-Tenant Ingestion & Partitioning',
    ],
    images: ['/images/searchops.jpg'],
    githubUrl: 'https://github.com/Aayush-pixel29/SearchOps',
    liveUrl: 'https://search-ops-one.vercel.app/',
  },
  {
    id: 'recon-ai',
    number: '04',
    title: 'Recon AI',
    category: 'Disaster Response',
    year: '2025',
    featured: true,
    tier: 'featured',
    statusBadge: 'Offline-First Web App',
    tagline:
      'Disaster-response system designed around offline-first communication and store-and-forward networking during connectivity failures.',
    problem:
      'During natural disasters, terrestrial cellular networks collapse, leaving first responders and isolated citizens without emergency coordination or situational maps.',
    solution:
      'Developed a resilient, offline-first communication platform that queues encrypted triage data when disconnected and syncs automatically when a connection is restored.',
    impact:
      'Recognized at emergency buildathons for seamless zero-connectivity situational mapping.',
    architecturalDecisions: [
      {
        decision: 'IndexedDB + Service Worker Store-and-Forward Mesh',
        rationale:
          'Ensures field responders can log geospatial emergency markers, triage status, and supply requests even when cellular towers fail completely.',
      },
      {
        decision: 'Leaflet Vector Tiles with Local Caching',
        rationale:
          'Pre-caches critical regional map tiles so navigation and triage zone mapping work without active internet.',
      },
    ],
    measurableResults: [
      '100% offline data persistence across device reboots and simulated complete network outages.',
      'Instant sub-second background synchronization when cellular or Wi-Fi reconnection occurs.',
      'Recognized at emergency response buildathons for zero-connectivity situational reliability.',
    ],
    tools: ['Next.js', 'Leaflet', 'Geolocation API', 'Service Workers', 'IndexedDB'],
    deliverables: [
      'Offline Geospatial Triage Map',
      'Store-and-Forward Mesh Protocol',
      'Emergency Resource Dispatcher',
      'Progressive Web App (PWA)',
    ],
    images: ['/images/recon-ai.webp'],
    githubUrl: 'https://github.com/Aayush-pixel29/recon-ai-buildathon',
    liveUrl: 'https://recon-ai-buildathon.vercel.app',
  },
  {
    id: 'indicdoc-vqa',
    number: '05',
    title: 'IndicDoc-VQA',
    category: 'Vision-Language / Edge AI',
    year: '2025',
    featured: true,
    tier: 'featured',
    statusBadge: 'Local Edge AI Pipeline',
    tagline:
      'Offline-first VLM pipeline for extracting structured JSON from complex bilingual Marathi/English documents on local CPU infrastructure.',
    problem:
      'Processing sensitive regional language government, legal, and medical documents through cloud APIs breaches data sovereignty rules and costs prohibitive token fees.',
    solution:
      'Engineered a completely offline, local Vision-Language Model pipeline capable of extracting structured JSON schemas from noisy bilingual scans without internet access.',
    impact:
      '100% private on-premise document digitization with zero cloud reliance.',
    architecturalDecisions: [
      {
        decision: 'Qwen2.5-VL via Local Ollama Container',
        rationale:
          'Eliminates cloud API costs and satisfies strict data sovereignty requirements for regional government and medical records.',
      },
      {
        decision: 'Constrained Bilingual JSON Schema Extraction',
        rationale:
          'Forces deterministic JSON key-value extraction for Marathi/English multi-column forms without conversational hallucination.',
      },
      {
        decision: 'CPU Quantization Deployment',
        rationale:
          'Enables execution on standard local office PCs without requiring enterprise server GPUs.',
      },
    ],
    measurableResults: [
      '100% private on-premise execution with zero outbound internet network calls.',
      'Deterministic structured JSON extraction across noisy multi-column bilingual documents and tables.',
    ],
    tools: ['Qwen2.5-VL', 'Ollama', 'FastAPI', 'Docker', 'Python', 'CPU Quantization'],
    deliverables: [
      'Local VLM Inference Server',
      'Bilingual Marathi/English Parser',
      'Deterministic JSON Schema Extractor',
      'Zero-Dependency Docker Container',
    ],
    images: ['/images/indicdoc-vqa.jpg'],
    githubUrl: 'https://github.com/Aayush-pixel29/IndicDoc-VQA',
  },

  // =========================================================================
  // TIER 2: SPECIALIZED & DOMAIN SYSTEMS (6 ADDITIONAL SYSTEMS)
  // =========================================================================
  {
    id: 'skillfoundry',
    number: '06',
    title: 'SkillFoundry',
    category: 'AI Agents',
    year: '2026',
    featured: false,
    tier: 'specialized',
    statusBadge: 'AI Agent Research System',
    tagline:
      'Trajectory-based agent-learning system that synthesizes reusable skills from execution failure and evidence.',
    problem:
      'Conventional agent memory systems hallucinate context from past conversations instead of learning from actual execution trajectories and tool-use failures.',
    solution:
      'Built a closed learning cycle that executes tasks, analyzes failures, synthesizes reusable skills, and promotes them only if they measurably improve performance.',
    impact:
      'Achieved 100% reliability on GitHub CI benchmark with zero overhead tool calls.',
    architecturalDecisions: [
      {
        decision: 'Trajectory-Based Memory Synthesis',
        rationale:
          'Analyzes step-by-step execution tool logs rather than raw chat history to distill reproducible skill blueprints.',
      },
    ],
    measurableResults: [
      '100% deterministic test pass rate on automated GitHub CI agent benchmarks.',
    ],
    tools: ['Python', 'LLM Agents', 'CI/CD Pipelines', 'Evidential Reasoning'],
    deliverables: [
      'Execution Trajectory Analyzer',
      'Failure Analysis Engine',
      'Skill Synthesis & Replay',
      'Deterministic Evaluation Benchmark',
    ],
    images: ['/images/skillfoundry.jpg'],
    githubUrl: 'https://github.com/Aayush-pixel29/my-syndicate-project',
  },
  {
    id: 'doc-gen-agent-api',
    number: '07',
    title: 'Doc-Gen Agent API',
    category: 'AI Application',
    year: '2025',
    featured: false,
    tier: 'specialized',
    statusBadge: 'Production-Ready Architecture',
    tagline:
      'Autonomous asynchronous FastAPI service that turns topics into documents via multi-step LLM pipelines.',
    problem:
      'Generation is slow and LLM calls often fail, causing standard APIs to drop connections and lose state progress mid-generation.',
    solution:
      'Engineered an async pipeline with background task processing and atomic JSON state management to ensure progress is never lost during crashes.',
    impact:
      'Safe, reliable document generation with persistent atomic writes across pipelines.',
    architecturalDecisions: [
      {
        decision: 'Atomic JSON State + Asynchronous FastAPI Worker',
        rationale:
          'Prevents corrupted partial writes and dropped requests during long-running multi-step LLM document generations.',
      },
    ],
    measurableResults: [
      '100% crash recovery reliability with zero lost document states across long-running generations.',
    ],
    tools: ['FastAPI', 'Groq', 'Python', 'Atomic Writes', 'LLM Pipeline'],
    deliverables: [
      'Multi-Step Agent Pipeline',
      'Atomic State Management',
      'Background Task Processor',
      'Asynchronous Document Gen',
    ],
    images: ['/images/doc-gen-agent.jpg'],
    githubUrl: 'https://github.com/Aayush-pixel29/doc-gen-agent-api',
    liveUrl: 'https://doc-gen-agent-api.onrender.com/',
  },
  {
    id: 'passion-protocol',
    number: '08',
    title: 'Passion Protocol',
    category: 'Social / Matching',
    year: '2025',
    featured: false,
    tier: 'specialized',
    statusBadge: 'Full-Stack Web Product',
    tagline:
      'Product concept for matching collaborators by interests and building goals rather than traditional resumes.',
    problem:
      'Traditional professional networking platforms optimize for job titles, corporate pedigrees, and resume keywords rather than authentic creative chemistry.',
    solution:
      'Designed a social matching protocol that leverages vector embeddings to connect builders based on the semantic similarity of their side projects, technical interests, and building goals.',
    impact:
      'Connected creators based on shared passion matrices rather than corporate resumes.',
    architecturalDecisions: [
      {
        decision: 'Vector Semantic Interest Matching',
        rationale:
          'Embeds developer side-project descriptions and technical interests into a shared vector space for genuine builder compatibility.',
      },
    ],
    measurableResults: [
      'Sub-200ms vector cosine similarity matching across builder project databases.',
    ],
    tools: ['Next.js', 'React', 'Vector Embeddings', 'FastAPI', 'Tailwind CSS'],
    deliverables: [
      'Vector Interest Matching Engine',
      'Dynamic Builder Profiles',
      'Project Collaboration Feed',
      'Direct Real-Time Chat',
    ],
    images: ['/images/passion-protocol.jpg'],
    githubUrl: 'https://github.com/Aayush-pixel29/passion-protocol',
    liveUrl: 'https://passion-protocol.vercel.app',
  },
  {
    id: 'interview-agent',
    number: '09',
    title: 'Interview Agent',
    category: 'AI Agents',
    year: '2025',
    featured: false,
    tier: 'specialized',
    statusBadge: 'AI Application Prototype',
    tagline:
      'AI-driven interview workflow exploring structured interactions, adaptive questioning, and automated technical evaluation.',
    problem:
      'Initial technical candidate screening is heavily time-consuming, prone to human interviewer bias, and difficult to standardize across engineering disciplines.',
    solution:
      'Built an autonomous agent capable of conducting structured technical interviews, adapting questions dynamically based on real-time candidate answers, and outputting actionable rubrics.',
    impact:
      'Automated standardized technical screenings with transparent evaluation criteria.',
    architecturalDecisions: [
      {
        decision: 'Dynamic Adaptive Question Tree',
        rationale:
          'Adjusts question difficulty based on candidate response depth and code quality in real time.',
      },
    ],
    measurableResults: [
      'Structured objective scorecards generated automatically at the end of each session.',
    ],
    tools: ['Python', 'FastAPI', 'Gemini API', 'LangChain', 'Speech Processing'],
    deliverables: [
      'Adaptive Conversational Agent',
      'Automated Evaluation Matrix',
      'Interactive Candidate Workspace',
      'Objective Feedback Report',
    ],
    images: ['/images/interview-agent.jpg'],
    githubUrl: 'https://github.com/Aayush-pixel29/Interview-Agent',
    liveUrl: 'https://interview-agent-kohl.vercel.app/demo',
  },
  {
    id: 'edge-chest-xray',
    number: '10',
    title: 'Edge Chest X-Ray Triage',
    category: 'Edge AI / Medical',
    year: '2024',
    featured: false,
    tier: 'specialized',
    statusBadge: 'Local Edge AI Pipeline',
    tagline:
      'Offline medical-imaging prototype with INT8 TFLite inference, Grad-CAM explainability and a local voice copilot.',
    problem:
      'Rural clinics lack certified radiologists and reliable internet, making urgent triage of pulmonary emergencies and tuberculosis cases difficult.',
    solution:
      'Deployed an edge-optimized AI triage system that runs completely offline with INT8 quantization, augmented with visual Grad-CAM explainability and a local voice copilot.',
    impact:
      'Sub-50ms offline inference with transparent visual heatmaps for healthcare workers.',
    architecturalDecisions: [
      {
        decision: 'TensorFlow Lite INT8 Quantization + Grad-CAM Heatmaps',
        rationale:
          'Runs on low-cost tablet processors while providing visual explainability heatmaps for frontline medical staff.',
      },
    ],
    measurableResults: [
      'Sub-50ms inference time on edge hardware with verified visual localization of pulmonary anomalies.',
    ],
    tools: ['TensorFlow Lite INT8', 'Grad-CAM', 'OpenCV', 'Python', 'Local TTS'],
    deliverables: [
      'Sub-50ms On-Device Triage Engine',
      'Visual Grad-CAM Saliency Maps',
      'Hands-Free Voice Interface',
      'Lightweight Clinical Tablet UI',
    ],
    images: ['/images/xray-triage.webp'],
    githubUrl: 'https://github.com/Aayush-pixel29/edge-tb-triage',
  },
  {
    id: 'ai-traffic-analyzer',
    number: '11',
    title: 'AI Traffic Flow Analyzer',
    category: 'Computer Vision',
    year: '2024',
    featured: false,
    tier: 'specialized',
    statusBadge: 'Computer Vision Pipeline',
    tagline:
      'Real-time vehicle detection, tracking, speed estimation and congestion analysis using deep vision.',
    problem:
      'Municipal traffic agencies rely on expensive road sensors and manual CCTV inspection rather than automated real-time analytics.',
    solution:
      'Built a software-based computer vision pipeline that analyzes standard video feeds to detect vehicles, estimate velocity, and monitor intersection bottlenecks in real time.',
    impact:
      'Real-time tracking of 30+ vehicles per frame with accurate density heatmaps.',
    architecturalDecisions: [
      {
        decision: 'YOLOv8 + BoT-SORT Multi-Object Tracking',
        rationale:
          'Maintains vehicle IDs through temporary occlusions at intersections without costly LiDAR sensors.',
      },
    ],
    measurableResults: [
      'Real-time 30+ FPS multi-lane vehicle velocity and congestion tracking from standard CCTV streams.',
    ],
    tools: ['YOLOv8', 'BoT-SORT', 'OpenCV', 'PyTorch', 'Python'],
    deliverables: [
      'Multi-Class Vehicle Detector',
      'BoT-SORT Trajectory Tracker',
      'Speed & Density Vector Estimator',
      'Live Video Analytics Stream',
    ],
    images: ['/images/traffic.webp'],
    githubUrl: 'https://github.com/Aayush-pixel29/AI-Traffic-Flow-Analyzer',
  },
];

