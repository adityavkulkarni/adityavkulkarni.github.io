const personalInfo = {
    "name": "Aditya Kulkarni",
    "title": "Software Engineer • AI Scientist • MS in Computer Science (UT Dallas ‘25)",
    "tagline": "Developing AI solutions that drive real-world impact",
    "summary": "Software Engineer and AI Scientist with experience building production-grade ML systems, agentic RAG platforms, and medical imaging solutions across healthcare and pharma. Skilled in Python, PyTorch, TensorFlow, FastAPI, React, Kafka, and AWS, with a focus on multimodal MRI/CT/3D registration, trajectory planning, and real-time analytics.",
    "email": "adityavkulkarni0999@gmail.com",
    "phone": "+1 (945) 527-5186",
    "location": "Rochester, MN",
    "linkedin": "https://www.linkedin.com/in/adityavkulkarni",
    "github": "https://www.github.com/adityavkulkarni",
    "website": "https://adityavkulkarni.github.io",
    "resumeUrl": "https://drive.google.com/file/d/1g8y4Um3MvQXAS4IU8J3eF_YSGsRTLha5/view?usp=sharing"
};

const hero = {
    "title": "Software Engineer building AI-driven neurosurgical planning and navigation system.",
    "currentStatus": "AI Scientist & Software Engineer at Navinetics AI",
    "previousPositions": [
        "Previously ML Engineer at University Lands",
        "Previously Data Scientist at Boehringer Ingelheim"
    ],
};

const about = {
    "intro": "I am a Software Engineer and AI Scientist building next-generation neurosurgical planning and navigation systems at Navinetics AI. ",
    "description": "With a Master’s in Computer Science from The University of Texas at Dallas and prior experience across MLOps, agentic RAG systems, and production-grade ML applications, I specialize in designing and deploying robust, high-impact software that bridges advanced machine learning with real-world clinical and enterprise use cases. My work spans computer vision, LLM-powered systems, and cloud-native architectures, and I thrive at the intersection of research and engineering."
};

const projects = [
    {
      "id": 1,
      "title": "Contract IQ: AI-Powered Contract Analysis",
      "description": "Contract IQ is an AI-powered platform that simplifies working with complex legal documents using an Agentic Graph-based RAG pipeline. It transforms contracts, leases, and amendments into interconnected knowledge graphs, enabling users to navigate relationships—such as linked amendments or shared parties—like an interactive legal map.<br>The system understands query intent and uses intelligent agent workflows to choose the best retrieval method: vector search, graph exploration, or a hybrid approach. A dynamic, recursive retrieval process with AI feedback loops ensures accurate answers, even for complex or incomplete questions.<br>By integrating GPT language models, graph databases like Neo4j, and advanced machine learning, Contract IQ helps legal teams and analysts quickly extract contract dates, financial terms, parties, and amendment histories—saving hours of manual review.",
      "image": "assets/ciq.png",
      "techStack": ["GPT4o", "Langchain", "Neo4j", "OpenAI API", "Qwen3", "PostgresSQL", "Streamlit", "Pytorch", "HuggingFace Transformers"],
      "githubUrl": "https://www.github.com/adityavkulkarni",
      "category": "AI Engineering",
    },
    {
      "id": 2,
      "title": "Agentic PDF Parser for Structured PDF",
      "description": "An Agentic Retrieval-Augmented Generation (RAG) system that can retrieve answers from uploaded PDF documents, specified website URLs, or both simultaneously. It uses an intelligent agent to determine the most relevant source for a given query.<br>The system supports PDF retrieval by extracting and indexing text from uploaded files, website retrieval by parsing and processing content from supplied URLs, and combined query handling when both sources are available.<br>Agent logic prioritizes answers from PDFs first, then websites, and clearly indicates when a question falls outside the provided data.<br>With a simple Streamlit-based UI, users can upload documents, index them, and ask questions. The backend uses semantic embeddings and QA models to search and answer queries accurately, powered by OpenAI API and Qwen3. Qdrant handles vector search, while PyPDF2 and BeautifulSoup parse PDFs and web pages respectively.",
      "image": "assets/pdf.png",
      "techStack": ["Streamlit", "PyPDF2", "BeautifulSoup", "OpenAI API", "Qwen3", "Qdrant", "PostgresSQL", "Python"],
      "githubUrl": "https://github.com/adityavkulkarni/agentic-pdf-rag",
      "category": "AI Engineering"
    },
    {
      "id": 3,
      "title": "News Bias Analysis on Realtime Reddit Posts",
      "description": "A cutting-edge real-time news classification and interpretation system engineered using Apache Kafka and Spark Structured Streaming. The platform integrates fine-tuned DistilBERT models for both bias classification (83% accuracy) and sentiment analysis (91% accuracy), enabling precise media bias and tone detection.<br>It processes high-velocity streams of up to 50 news articles per minute, showcasing scalability and performance. Real-time analytics are elegantly presented via the ELK stack, combining Elasticsearch, Logstash, and Kibana for data indexing, transformation, and visualization.<br>Additionally, MLflow is employed for robust experiment tracking, model versioning, and deployment lifecycle management, ensuring reproducibility and seamless integration into the MLOps pipeline.",
      "image": "assets/news.png",
      "techStack": ["Apache Kafka", "Apache Spark", "Spark Streaming", "Spark NLP", "DistilBERT", "MLflow", "Elastic Stack (ELK)", "Large Language Models", "MLOps", "Python"],
      "githubUrl": "https://github.com/adityavkulkarni/media-analyzer",
      "liveUrl": "https://github.com/adityavkulkarni/media-analyzer/blob/main/Media%20Bias%20Dashboard%20-%20Elastic.pdf",
      "category": "Data Engineering"
    },
    {
      "id": 4,
      "title": "2D Dynamic Object Grasping using Predictive Tracking",
      "description": "A robotics project featuring a sophisticated system for real-time detection and tracking of deterministically moving objects in 2D. It uses a predictive algorithm to enable a robotic manipulator to calculate optimal grasping points and trajectories with high precision. The primary simulation environment is Gazebo. The system leverages OpenCV for computer vision and integrates with ROS (Robot Operating System) to create a seamless interface between vision processing and robotic control systems.",
      "image": "assets/ros.png",
      "techStack": ["Gazebo", "OpenCV", "ROS", "Robotic Manipulation", "Python"],
      "githubUrl": "https://github.com/adityavkulkarni/2D_dynamic_object_grasping",
      "liveUrl": "https://utdallas.app.box.com/s/mlh7mzs4jasjsx9vxsymagupyqrti79v",
      "category": "Robotics"
    },
    {
      "id": 5,
      "title": "InvestAid: An AI-powered Investment Dashboard",
      "description": "Designed an AI-powered investment advisory system leveraging NLP and aspect-based sentiment detection techniques. Utilized Spacy models to analyze sentiment and topics in over 50,000 social media posts and financial news articles, achieving a classification accuracy of 85% and identifying 10 key topics relevant to financial markets. Integrated historical data analysis to generate data-driven stock position recommendations for the top 3 performing stocks.",
      "image": "assets/investaid.png",
      "techStack": ["NLP", "Spacy", "Sentiment Analysis", "Financial Data Analysis", "Python"],
      "githubUrl": "https://github.com/sauravdosi/investaid",
      "category": "ML Engineering"

    }, 
    {
      "id": 6,
      "title": "Language Translation Using RNN using BPTT algorithm",
      "description": "A language translation system implemented from scratch using PyTorch, featuring a Recurrent Neural Network (RNN) trained with Backpropagation Through Time (BPTT). The project demonstrates deep learning fundamentals by building custom RNN architecture for sequence-to-sequence translation tasks, handling variable-length inputs and outputs. It showcases knowledge of neural network training dynamics, gradient propagation across time steps, and practical use of PyTorch for building and optimizing deep learning models.",
      "image": "assets/rnn.png",
      "techStack": ["PyTorch", "Python", "Deep Learning", "Recurrent Neural Networks", "BPTT", "NLP"],
      "githubUrl": "https://github.com/adityavkulkarni/6375_Project_RNN",
      "category": "Deep Learning"
    }
];

const workExperience = [
    {
      "id": 1,
      "company": "Navinetics Inc (An Mayo Clinic Company)",
      "position": "AI Scientist and Software Engineer",
      "duration": "Janauary 2026 - Present",
      "startDate": "2026-01",
      "endDate": "Present",
      "location": "Rochster, MN",
      "icon": "assets/nn.png",
      "responsibilities": [
        "Builiding an in-house AI-driven neuroimaging suite to process CT/MRI data and generate surgical plans via a novel 3D surface-scanning workflow.",
        "Developing a 3D registration engine to co-register intraoperative surface scans with preoperative MRI/CT volumes for Deep Brain Stimulation (DBS) planning.",
        "Developing deep learning models for automated volumetric segmentation and trajectory planning, optimizing surgical accuracy and planning efficiency.",
      ],
      "technologies": ["Python", "VTK", "Medical Imaging Processing", "3D Visualization", "Software Development","PyQT"]
    },
    {
      "id": 2,
      "company": "UT System, University Lands",
      "position": "ML Engineer Intern",
      "duration": "June 2025 - December 2025",
      "startDate": "2025-06",
      "endDate": "2025-12",
      "location": "Dallas, TX(remote)",
      "icon": "assets/utsi.png",
      "responsibilities": [
        "Developed ContractIQ, an AI-powered contract intelligence service leveraging RAG for automated legal document analysis and cross-referencing .",
        "Architected a modular pipeline: scanned PDF contracts are parsed, intelligently chunked (semantic and agentic strategies), and indexed for advanced search and context-aware retrieval .",
        "Built robust storage backends: PostgreSQL + pgvector for fast metadata/embedding search; Neo4j for dynamic knowledge graph of contract entities, relationships, and amendments .",
        "Engineered multilevel, query-driven search: combines classifier-guided chunk/page/document retrieval, hybrid vector/metadata/graph approaches, and recursive context expansion .",
        "Implemented entity and relationship extraction agents to populate and maintain interlinked contract graphs, enabling powerful graph-based reasoning and compliance checks .",
        "Delivered core use cases: legal Q&A chatbot with original-document line references; portal integration for dynamic FAQ/gen analysis; automated compliance alerts from daily operational reports .",
        "Supported plug-and-play LLMs and embeddings (Azure OpenAI, Ollama, Qwen3), ensuring flexibility across retrieval and generation tasks .",
        "Designed extensible, microservices architecture—each component (parsing, storage, retrieval, LLM backend) is fully configurable and independently deployable .",
      ],
      "technologies": ["GPT-4o", "LangChain", "Neo4j", "OpenAI API", "Qwen3", "PostgreSQL", "Streamlit", "PyTorch", "HuggingFace Transformers"]
    },
    {
    "id": 2,
    "company": "Boehringer Ingelheim",
    "position": "Data Science Intern",
    "duration": "January 2025 – May 2025",
    "startDate": "2025-01",
    "endDate": "2025-05",
    "location": "Ridgefield, CT",
    "icon": "assets/bi.png",
    "responsibilities": [
      "Developed and optimized LLM frameworks (GPT-4o, Claude Sonnet 3.5) for vendor classification and webpage analysis, achieving an 8% accuracy improvement using advanced prompt engineering and parameter-efficient fine-tuning.",
      "Built Streamlit applications with multiprocessing, reducing processing time by 30%.",
      "Designed evaluation pipelines using Argilla and DeepEval, creating dashboards for LLM performance monitoring.",
      "Led MLOps deployment on OpenShift, integrating CI/CD pipelines to enhance application reliability."
    ],
    "technologies": ["GPT-4o", "Claude Sonnet 3.5", "Prompt Engineering", "PEFT", "Streamlit", "Argilla", "DeepEval", "OpenShift"]
    },
    {
    "id": 3,
    "company": "University of Texas at Dallas",
    "position": "Graduate Research Assistant",
    "duration": "May 2024 – December 2024",
    "startDate": "2024-05",
    "endDate": "2024-12",
    "location": "Dallas, TX",
    "icon": "assets/utd.png",
    "responsibilities": [
      "Engineered an object detection system for aquatic animals using ResNet50 and YOLO architectures.",
      "Conducted literature review of over 25 research articles on underwater robotics and vision tracking technologies.",
      "Collaborated with researchers at HBS Lab to enhance underwater robot navigation capabilities.",
      "Fine-tuned CodeLlama for software engineering tasks using PEFT methods like LoRA and quantization, achieving 84% accuracy."
    ],
    "technologies": ["ResNet50", "YOLO", "PyTorch", "PEFT", "LoRA", "Quantization", "CodeLlama"]
    },
    {
    "id": 4,
    "company": "PubMatic Inc.",
    "position": "Software Development Engineer in Test-1",
    "duration": "April 2021 – June 2023",
    "startDate": "2021-04",
    "endDate": "2023-06",
    "location": "Pune, India",
    "icon": "assets/pub.png",
    "responsibilities": [
      "Designed and executed automated testing frameworks for large-scale ad-tech platform components.",
      "Collaborated with cross-functional teams to ensure quality and performance in product releases.",
      "Developed scripts for regression and functional testing, reducing manual testing overhead."
    ],
    "technologies": ["Automation Testing", "Python", "Selenium", "Postman", "SQL"]
  }
];
const education = [
  {
    "id": 1,
    "institution": "University of Texas at Dallas",
    "degree": "Master of Science in Computer Science",
    "duration": "August 2023 – December 2025",
    "gpa": "3.74/4.0",
    "icon": "assets/utd.png",
    "details": [
      "Independent Research: Visual tracking of aquatic animals using ML-controlled underwater robots",
      "Courses: Machine Learning, Natural Language Processing, Software Engineering for LLM Systems, Robot Manipulation and Navigation",
    ]
  },
  {
    "id": 2,
    "institution": "Savitribai Phule Pune University",
    "degree": "Bachelor of Engineering in Computer Science",
    "duration": "August 2017 – May 2021",
    "gpa": "9.12/10",
    "icon": "assets/sppu.png",
    "details": [
      "Technical head of ACM Student Chapter, PCCOER",
      "Vice President of Student Association, PCCOER",
      "Courses: Data Structures and Algorithms, Machine Learning, Data Analytics, Databases, and Software Engineering."
    ]
  }
];

const skills = {
        "topSkills": [
            "Python",
            "LangChain",
            "AWS",
            "Neo4j",
            "SQL",
            "PyTorch",
            "Computer Vision",
            "3D Image Processing",
            "Medical Imaging",
        ],
        "categories": {
          "Machine Learning & AI": [
              "Deep Learning",
              "Natural Language Processing (NLP)",
              "Computer Vision",
              "Large Language Models (LLMs)",
              "Transformers",
              "PyTorch",
              "HuggingFace",
              "Prompt Engineering",
              "Parameter-Efficient Fine-Tuning (PEFT)",
              "Chain-of-Thought Reasoning"
          ],
          "Databases & Data Platforms": [
              "PostgreSQL",
              "MongoDB",
              "MySQL",
              "Neo4j",
              "HDFS",
              "Databricks"
          ],
          "Frameworks & Libraries": [
              "LangChain",
              "LlamaIndex",
              "Spark (SparkSQL)",
              "DeepEval",
              "Argilla",
              "Flask",
              "Streamlit",
              "YOLO",
              "ResNet50"
          ],
          "Programming Languages": [
              "Python",
              "C++",
              "SQL",
              "Cypher",
              "Bash"
          ],
          "Tools & Other Technologies": [
              "Linux",
              "Git",
              "ELK Stack",
              "Streamlit",
              "Advanced Visualization (Kibana)",
              "Agentic Workflows",
              "Graph-based Retrieval"
          ],
          "Cloud & DevOps": [
              "AWS (S3, EC2, Lambda)",
              "Docker",
              "Kubernetes",
              "Jenkins",
              "MLflow",
              "Kafka",
              "OpenShift",
              "CI/CD Pipelines"
          ],
          "Data Science & Analytics": [
              "Data Cleaning & Preprocessing",
              "Feature Engineering",
          ]
      }
    };

const certifications = [
    {
      "id": 1,
      "name": "Data Science Professional Certificate",
      "issuer": "IBM via Coursera",
      "dateEarned": "2024-08",
      "verifyUrl": "https://www.coursera.org/account/accomplishments/professional-cert/WRS7YJPCRKST?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
      "badge": "assets/ibm-data-science-professional-certificate.png"
    }
  ];


const timeLine = [
    {
        startDate: "2021-04",
        position: "Software Development Engineer in Test-1",
        company: "PubMatic Inc.",
        description: [
            "Automated functional test cases in Python to achieve a 90% reduction in testing time.",
            "Owned end-to-end testing for high-impact, high-revenue features improving release reliability.",
            "Participated in feature design discussions and code reviews to ensure best practices in test automation.",
            "Enhanced development velocity through continuous integration and automation improvements."
        ],
        technologies: ["SDET", "Python", "Automation Testing", "QA", "Continuous Integration", "Software Testing"]
    },
    {
        startDate: "2024-08",
        position: "Graduate Research Assistant",
        company: "HBS Labs, University of Texas at Dallas",
        description: [
            "Researched machine learning-based underwater object detection and tracking systems under Dr. Yonas Tadesse and Dr. Balakrishnan Prabhakaran.",
            "Developed an object detection pipeline using ResNet50 optimized for aquatic lighting conditions and underwater imagery.",
            "Conducted extensive literature review of underwater robotics and computer vision-based tracking methods."
        ],
        technologies: ["Python", "TensorFlow", "ResNet50", "Computer Vision", "Object Detection", "Deep Learning"]
    },
    {
        startDate: "2025-01",
        position: "Data Science Intern",
        company: "Boehringer Ingelheim",
        description: [
            "Developed a Streamlit-based application to automate scraping and analysis of medical entity websites for structured data extraction.",
            "Integrated GPT-4o with advanced prompt engineering (chain-of-thought and structured output) for classification into Class-of-Trade codes.",
            "Built an evaluation framework using the LLM-as-a-judge methodology with deepeval to assess model accuracy and consistency.",
            "Created dashboards to visualize evaluation metrics and performance history, driving data-driven improvement cycles.",
            "Contributed to MLOps workflows by deploying and managing models on OpenShift, ensuring scalability and uptime.",
            "Collaborated with cross-functional teams to align data-driven insights with business and regulatory needs."
        ],
        technologies: ["Python", "Streamlit", "GPT-4o", "deepeval", "OpenShift", "LLM Evaluation", "Prompt Engineering"]
    },
    {
    startDate: "2025-06",
    position: "Machine Learning Engineer Intern",
    company: "University of Texas System",
    description: [
        "Developed ContractIQ, an AI-powered contract intelligence platform leveraging Retrieval-Augmented Generation (RAG) for automated legal document analysis and cross-referencing.",
        "Architected a modular pipeline for parsing, chunking, indexing, and retrieving scanned PDF contracts using semantic and agentic strategies.",
        "Built storage backends using PostgreSQL + pgvector for embedding search and Neo4j for knowledge graph representation of contract entities and relationships.",
        "Implemented entity and relationship extraction agents enabling graph-based reasoning and compliance verification.",
        "Delivered end-user applications such as a legal Q&A chatbot with document citations, dynamic FAQ generation, and automated compliance alerts.",
        "Designed an extensible microservices architecture with modular components for parsing, storage, retrieval, and LLM backends."
    ],
    technologies: ["Python", "FastAPI", "Streamlit", "AngularJS", "PostgreSQL", "pgvector", "Neo4j", "LangChain", "LlamaIndex", "Azure OpenAI"]
    },
    {
    startDate: "2026-01",
    position: "AI Scientist and Software Engineer",
    company: "Navinetics Inc (An Mayo Clinic Company)",
    description: [
        "Builiding an in-house AI-driven neuroimaging suite to process CT/MRI data and generate surgical plans via a novel 3D surface-scanning workflow.",
        "Developing a 3D registration engine to co-register intraoperative surface scans with preoperative MRI/CT volumes for Deep Brain Stimulation (DBS) planning.",
        "Developing deep learning models for automated volumetric segmentation and trajectory planning, optimizing surgical accuracy and planning efficiency.",
    ],
    technologies: ["Python", "VTK", "Medical Imaging Processing", "3D Visualization", "Software Development","PyQT"]
    }
];
