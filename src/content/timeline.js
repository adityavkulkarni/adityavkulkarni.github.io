/**
 * timeline.js — work and education on ONE list.
 *
 * Newest first. `axis` maps to the commitment type in profile.js (full-time,
 * internship, research, education) and picks the node colour; `kind: 'edu'`
 * renders an open node instead of a solid one.
 *
 * `chapters` replaces the usual bullet dump: each is a named facet of the role,
 * so the reader gets structure rather than a flat list.
 */

export const timeline = [
  {
    id: 'navinetics',
    kind: 'work',
    axis: 'si',
    from: '2026',
    to: 'Present',
    range: 'January 2026 — Present',
    role: 'Founding Software Engineer',
    roleAlt: 'AI Scientist',
    org: 'NaviNetics AI',
    orgNote: 'a Mayo Clinic company',
    place: 'Rochester, MN',
    logo: '/assets/nn.png',
    lede: 'A medical AI company developing neurosurgical planning and navigation software. I own the system architecture, direct the AI research, and act as the primary technical contact for the clinical and regulatory teams.',
    chapters: [
      {
        title: 'Architecture',
        body: 'Own the planning and navigation suite end to end — a layered design that keeps the imaging pipeline, the planning logic, and the visualization layer separate, so each can scale, be tested, and be traced independently. Module boundaries map onto IEC 62304 software items, so the structure that keeps the code maintainable is also the structure that makes it auditable. Established the design patterns that allow new surgical modalities and hardware integrations to be introduced without disturbing already-validated workflows.',
      },
      {
        title: 'Fusion and registration',
        body: 'Architected the CT / MR / surface-scan fusion pipeline that stereotactic targeting rests on: skull stripping, mutual-information rigid alignment, then deformable refinement — marrying CT’s bone and frame geometry to MR’s soft-tissue contrast. The surface stage is deliberately scanner-agnostic: point clouds are normalised from any capture source rather than bound to a vendor SDK, then aligned to the CT/MR skin isosurface through feature-based initialisation and robust ICP with outlier rejection for draping and occlusion.',
      },
      {
        title: 'Surface-based registration',
        body: 'Pioneered 3D surface scanning as a stereotactic imaging modality in its own right — enabling markerless registration and cutting the reliance on CT fiducials. Achieved sub-millimetre target registration error with structured-light capture while keeping the pipeline independent of any one scanner class. Established FRE and TRE validation against phantom ground truth, with per-registration confidence surfaced to the surgeon and failure modes characterised across head pose and surface coverage.',
      },
      {
        title: 'Real-time visualization',
        body: 'Built the real-time 3D visualization in VTK — a composable rendering engine with pluggable scene components, integrating DICOM CT and MR volumes with interactive trajectory and anatomy overlays. Integrated DTI and DWI tractography into the planning workflow so white-matter tracts are visible at the point a surgical path is defined, allowing eloquent structures to be avoided during planning rather than encountered during surgery.',
      },
      {
        title: 'Regulatory and risk',
        body: 'Direct development as Class B/C SaMD under IEC 62304 — requirements-to-design traceability, SOUP evaluation, anomaly management, multi-level verification supporting FDA 510(k) V&V. Own software risk controls per ISO 14971 and usability engineering per IEC 62366-1 inside an ISO 13485 design-control framework. Patient data protection is addressed at design time: HIPAA/GDPR-aligned PHI handling, DICOM de-identification, encryption, role-based access control, and audit logging aligned to ISO 27001 and 21 CFR Part 11.',
      },
      {
        title: 'Clinical collaboration',
        body: 'Primary technical interface to neurosurgeons, neurologists, roboticists and regulatory — translating clinical requirement into design specification and back again. Lead live deployment and field testing with practising surgeons, and turn operative feedback into architectural change. Define the product roadmap with leadership and clinical advisors, and present architecture and AI capability in investor meetings.',
      },
    ],
    stack: ['Python', 'VTK', 'ITK / SimpleITK', 'PyQt', 'DICOM', 'PyTorch', '3D Registration', 'Medical Image Segmentation', 'IEC 62304'],
  },

  {
    id: 'utsystem',
    kind: 'work',
    axis: 'ap',
    from: '2025',
    to: '2025',
    range: 'June 2025 — December 2025',
    role: 'ML / LLM Engineering Intern',
    org: 'The University of Texas System',
    place: 'Houston, TX',
    logo: '/assets/utsi.png',
    lede: 'Built ContractIQ, a service that analyses decades of scanned land leases and answers questions about them, with a reference to the source line.',
    chapters: [
      {
        title: 'Parsing and storage',
        body: 'Scanned PDF contracts enter a modular pipeline that parses, chunks them by semantic and agentic strategy rather than fixed token windows, and indexes them for context-aware retrieval. Storage is partitioned by workload: PostgreSQL with pgvector for metadata and embedding search, and Neo4j for a knowledge graph of parties, obligations, amendments and the relationships between them.',
      },
      {
        title: 'Query-driven retrieval',
        body: 'Engineered a multilevel, query-driven search: a classifier determines whether the answer resides in a chunk, a page or a full document, after which hybrid vector, metadata and graph retrieval runs with recursive context expansion until the response is supported by source evidence. Entity and relationship extraction agents keep the contract graph populated and interlinked, enabling graph-based reasoning and compliance verification.',
      },
      {
        title: 'Delivered applications',
        body: 'A legal question-answering assistant citing the originating document line; portal integration generating dynamic FAQs and analysis; and automated compliance alerts derived from daily operational reports. Language and embedding models are interchangeable across providers — Azure OpenAI, Ollama, Qwen3 — within a microservices architecture where parsing, storage, retrieval and generation are independently configurable and deployable.',
      },
    ],
    stack: ['Python', 'FastAPI', 'LangChain', 'LlamaIndex', 'Neo4j', 'PostgreSQL', 'pgvector', 'Azure OpenAI', 'Qwen3', 'AngularJS', 'Streamlit'],
  },

  {
    id: 'boehringer',
    kind: 'work',
    axis: 'ap',
    from: '2025',
    to: '2025',
    range: 'January 2025 — May 2025',
    role: 'Data Science Intern',
    org: 'Boehringer Ingelheim',
    place: 'Ridgefield, CT',
    logo: '/assets/bi.png',
    lede: 'Automated a manual classification workflow using large language models, and built the framework used to evaluate and monitor it.',
    chapters: [
      {
        title: 'Classification pipeline',
        body: 'A Streamlit application that scrapes medical-entity websites and extracts structure from them, then classifies each into Class-of-Trade codes using GPT-4o with chain-of-thought prompting and structured output generation. Multiprocessing reduced processing time by approximately 30%.',
      },
      {
        title: 'Evaluation',
        body: 'Designed the evaluation framework using an LLM-as-a-judge methodology with deepeval, alongside a dashboard tracking evaluation history so accuracy and consistency could be assessed over time. This made model changes measurable rather than anecdotal.',
      },
      {
        title: 'Deployment',
        body: 'Contributed to MLOps practice: model deployment and management on OpenShift with CI/CD integration, ensuring reliable serving and continuity beyond the internship.',
      },
    ],
    stack: ['Python', 'GPT-4o', 'Claude Sonnet', 'deepeval', 'Argilla', 'Streamlit', 'OpenShift', 'Prompt Engineering', 'PEFT'],
  },

  {
    id: 'utd-ms',
    kind: 'edu',
    axis: 'edu',
    from: '2023',
    to: '2025',
    range: 'August 2023 — December 2025',
    role: 'M.S. Computer Science',
    org: 'The University of Texas at Dallas',
    place: 'Dallas, TX',
    logo: '/assets/utd.png',
    detail: 'GPA 3.74 / 4.0',
    lede: 'Independent research on tracking aquatic animals visually, using underwater robots driven by machine learning.',
    chapters: [
      {
        title: 'Coursework',
        body: 'Machine Learning · Natural Language Processing · Software Engineering for LLM Systems · Robot Manipulation and Navigation · Big Data Management and Analytics.',
      },
    ],
    stack: [],
  },

  {
    id: 'utd-ra',
    kind: 'work',
    axis: 'lr',
    from: '2024',
    to: '2024',
    range: 'August 2024 — December 2024',
    role: 'Research Assistant, Machine Learning',
    org: 'HBS Lab, UT Dallas',
    place: 'Dallas, TX',
    logo: '/assets/utd.png',
    lede: 'Underwater object detection and tracking with vision systems, at the HBS Lab under Dr. Yonas Tadesse and Dr. Balakrishnan Prabhakaran.',
    chapters: [
      {
        title: 'Underwater object detection',
        body: 'Built an object detection system on ResNet50 tuned for aquatic animals under underwater lighting, where scattering, colour cast and low contrast present materially different challenges from terrestrial detection. Conducted a comprehensive literature survey of underwater robotics and vision tracking systems.',
      },
      {
        title: 'Fine-tuning CodeLlama',
        body: 'Fine-tuned CodeLlama for software engineering tasks using parameter-efficient methods — LoRA and quantization — reaching 84% accuracy on the target task.',
      },
    ],
    stack: ['Python', 'PyTorch', 'TensorFlow', 'ResNet50', 'YOLO', 'LoRA', 'Quantization', 'CodeLlama'],
  },

  {
    id: 'pubmatic',
    kind: 'work',
    axis: 'ap',
    from: '2021',
    to: '2023',
    range: 'April 2021 — June 2023',
    role: 'Software Development Engineer in Test',
    org: 'PubMatic',
    place: 'Pune, India',
    logo: '/assets/pub.png',
    lede: 'Two years on an advertising platform serving more than 500 clients worldwide, where release quality was directly tied to revenue.',
    chapters: [
      {
        title: 'Test automation',
        body: 'Automated functional test suites in Python, reducing test execution time by approximately 90%. Owned end-to-end testing for multiple high-priority, high-revenue features, including final sign-off before release.',
      },
      {
        title: 'Design and code review',
        body: 'Participated in feature design discussions and code reviews rather than receiving completed work for verification alone. Establishing how a feature would be validated during its design is the same practice IEC 62304 formalises in my current work.',
      },
    ],
    stack: ['Python', 'Selenium', 'SQL', 'Postman', 'CI/CD', 'Test Automation'],
  },

  {
    id: 'sppu',
    kind: 'edu',
    axis: 'edu',
    from: '2017',
    to: '2021',
    range: 'August 2017 — April 2021',
    role: 'B.E. Computer Engineering',
    org: 'Savitribai Phule Pune University',
    place: 'Pune, India',
    logo: '/assets/sppu.png',
    detail: 'GPA 9.12 / 10',
    lede: 'Undergraduate computer engineering, including two peer-reviewed publications and two elected student leadership positions.',
    chapters: [
      {
        title: 'Leadership and publications',
        body: 'Technical Head of the ACM Student Chapter and Vice President of the Student Association at PCCOER. Published peer-reviewed surveys on object detection models for automatic licence plate detection and on classification approaches for tweet sentiment analysis.',
      },
    ],
    stack: [],
  },
];
