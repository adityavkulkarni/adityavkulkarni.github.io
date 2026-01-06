// app-new.js - Script for the new brutalist design
// This connects to the data from app.js if available
const portfolioData = {
  "personalInfo": {
    "name": "Aditya Kulkarni",
    "title": "Machine Learning Engineer | CS Graduate Student at UTD",
    "tagline": "Developing AI solutions that drive real-world impact",
    "bio": "Results-driven Machine Learning Engineer with experience creating and implementing AI solutions in legal, healthcare, and finance. Skilled at leading projects from concept to completion, with a strong background in deep learning, NLP, and computer vision.",
    "email": "adityavkulkarni0999@gmail.com",
    "phone": "+1 945-527-5186",
    "location": "Dallas, TX",
    "linkedin": "https://www.linkedin.com/in/adityavkulkarni",
    "github": "https://www.github.com/adityavkulkarni",
    "website": "https://adityavkulkarni.github.io"
  },
  "projects": [
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
  ],
  "workExperience": [
    {
      "id": 1,
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
        "Technologies: Python, FastAPI, Streamlit, AngularJS, PostgreSQL (pgvector), Neo4j, LangChain, LlamaIndex, Azure OpenAI .",
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
  ],
  "education": [
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
  ],
  "skills": {
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
    },
  "certifications": [
    {
      "id": 1,
      "name": "Data Science Professional Certificate",
      "issuer": "IBM via Coursera",
      "dateEarned": "2024-08",
      "verifyUrl": "https://www.coursera.org/account/accomplishments/professional-cert/WRS7YJPCRKST?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
      "badge": "assets/ibm-data-science-professional-certificate.png"
    }
  ]
};

document.addEventListener('DOMContentLoaded', function() {
    // Populate Work Section
    populateWork();
    
    // Populate Skills
    populateSkills();
    
    // Populate Experience Timeline
    populateExperience();
    
    // Populate Certifications
    populateCertifications();
    
    // Initialize interactions
    initializeInteractions();
});

function populateWork() {
    const workGrid = document.getElementById('work-grid');
    if (!workGrid) return;
    
    // Clear existing content
    workGrid.innerHTML = '';
    
    // Use projects from portfolioData
    const projects = portfolioData.projects || [];
    
    if (projects.length === 0) {
        workGrid.innerHTML = '<p>Projects loading...</p>';
        return;
    }
    
    // Show featured projects (first 6)
    const featuredProjects = projects.slice(0, 6);
    
    featuredProjects.forEach(project => {
        const workItem = document.createElement('div');
        workItem.className = 'work-item';
        
        const techTags = (project.techStack || []).slice(0, 4).map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        const links = [];
        if (project.githubUrl) {
            links.push(`<a href="${project.githubUrl}" class="work-link" target="_blank">GitHub →</a>`);
        }
        if (project.liveUrl) {
            links.push(`<a href="${project.liveUrl}" class="work-link" target="_blank">Demo →</a>`);
        }
        links.push(`<span class="work-category">${project.category}</span>`);
        
        workItem.innerHTML = `
            <div class="work-header">
                <div>
                    <h3 class="work-title">${project.title}</h3>
                </div>
            </div>
            <div class="work-description-container">
                <button class="description-toggle">
                    <span class="toggle-arrow">▶</span>
                    <span class="toggle-text">Description</span>
                </button>
                <p class="work-description" style="display: none;">${project.description}</p>
            </div>
            <div class="work-tech">${techTags}</div>
            ${links.length > 0 ? `<div class="work-links">${links.join('')}</div>` : ''}
        `;
        
        workGrid.appendChild(workItem);
        
        // Add event listener for description toggle
        const toggleBtn = workItem.querySelector('.description-toggle');
        const descriptionText = workItem.querySelector('.work-description');
        const arrow = workItem.querySelector('.toggle-arrow');
        
        toggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const isHidden = descriptionText.style.display === 'none';
            descriptionText.style.display = isHidden ? 'block' : 'none';
            arrow.classList.toggle('expanded');
        });
    });
}

function populateSkills() {
    const skillsContainer = document.getElementById('skills-tags');
    if (!skillsContainer) return;
    
    // Clear existing content
    skillsContainer.innerHTML = '';
    
    // Use skills from portfolioData
    const skills = portfolioData.skills || {};
    
    // Get top skills from portfolioData
    const actualTopSkills = skills.topSkills || [];
    
    actualTopSkills.forEach(skill => {
        const skillTag = document.createElement('div');
        skillTag.className = 'skill-tag';
        skillTag.textContent = skill;
        skillsContainer.appendChild(skillTag);
    });
}

function populateExperience() {
    const timeline = document.getElementById('experience-timeline');
    if (!timeline) return;
    
    // Clear existing content
    timeline.innerHTML = '';
    
    // Use work experience from portfolioData
    const experiences = portfolioData.workExperience || [];
    
    if (experiences.length === 0) {
        timeline.innerHTML = '<p>Experience loading...</p>';
        return;
    }
    
    experiences.forEach((exp, index) => {
        const experienceRow = document.createElement('div');
        experienceRow.className = 'experience-row';
        experienceRow.dataset.expanded = 'false';
        
        // Get first letter of company name for placeholder
        const companyInitial = exp.company.charAt(0);
        
        // Build responsibilities list
        let responsibilitiesList = '';
        if (exp.responsibilities && exp.responsibilities.length > 0) {
            const bulletPoints = exp.responsibilities.map(resp => 
                `<li>${resp}</li>`
            ).join('');
            responsibilitiesList = `<ul class="experience-responsibilities">${bulletPoints}</ul>`;
        }
        
        experienceRow.innerHTML = `
            <div class="experience-logo">
                ${exp.icon && exp.icon !== '' ? 
                    `<img src="${exp.icon}" alt="${exp.company} logo">` : 
                    `<div class="experience-logo-placeholder">${companyInitial}</div>`
                }
            </div>
            <div class="experience-content">
                <div class="experience-header">
                    <span class="experience-company">${exp.company}</span>
                    <span class="experience-separator">|</span>
                    <span class="experience-role">${exp.position}</span>
                </div>
                <div class="experience-details">
                    <div class="experience-meta">${exp.duration} • ${exp.location}</div>
                    ${responsibilitiesList}
                </div>
            </div>
            <span class="experience-arrow">▼</span>
        `;
        
        timeline.appendChild(experienceRow);
    });
    
    // Add click handlers to expand/collapse
    document.querySelectorAll('.experience-row').forEach(row => {
        row.addEventListener('click', function() {
            const isExpanded = this.dataset.expanded === 'true';
            this.dataset.expanded = isExpanded ? 'false' : 'true';
        });
    });
}

function populateCertifications() {
    const certGrid = document.getElementById('cert-grid');
    if (!certGrid) return;
    
    // Clear existing content
    certGrid.innerHTML = '';
    
    // Use certifications from portfolioData
    const certifications = portfolioData.certifications || [];
    
    if (certifications.length === 0) {
        certGrid.innerHTML = '<p>Certifications loading...</p>';
        return;
    }
    
    certifications.forEach(cert => {
        const certItem = document.createElement('div');
        certItem.className = 'cert-item';
        
        certItem.innerHTML = `
            <div class="cert-icon">${cert.icon || '🏆'}</div>
            <h3 class="cert-name">${cert.name}</h3>
            <div class="cert-issuer">${cert.issuer}</div>
            <div class="cert-date">${cert.dateEarned}</div>
            ${cert.verifyUrl ? `<a href="${cert.verifyUrl}" class="cert-link" target="_blank">View Credential →</a>` : ''}
        `;
        
        certGrid.appendChild(certItem);
    });
}

function initializeInteractions() {
    const sectionTriggers = document.querySelectorAll('[data-section]');
    const navLinks = document.querySelectorAll('.nav-link[data-section]');
    const sections = document.querySelectorAll('.content-section');
    let resizeTimeout;

    const sectionMap = {
        home: ['home', 'about'],
        about: ['about'],
        experience: ['experience'],
        work: ['home', 'experience', 'work'],
        certification: ['certification'],
        play: ['play']
    };

    const setActiveSections = (key) => {
        const targets = sectionMap[key] || sectionMap.home;

        sections.forEach(section => {
            const shouldShow = targets.includes(section.id);
            section.classList.toggle('active', shouldShow);
        });

        navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.section === key);
        });

        // Handle scroll locking and work scrollbar
        const workScrollbar = document.getElementById('workScrollbar');
        
        if (targets.includes('about')) {
            //document.body.classList.add('scroll-lock');
            if (workScrollbar) workScrollbar.classList.remove('active');
        } else if (key === 'work') {
            // Enable natural scrolling for work section - no scroll lock
            document.body.classList.remove('scroll-lock');
            if (workScrollbar) workScrollbar.classList.add('active');
            // Scroll to top to show hero section
            setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
        } else {
            document.body.classList.remove('scroll-lock');
            if (workScrollbar) workScrollbar.classList.remove('active');
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    sectionTriggers.forEach(trigger => {
        const target = trigger.dataset.section;
        if (!target) return;

        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            setActiveSections(target);
        });
    });

    // Ensure default view shows hero + work ex + projects
    setActiveSections('work');
}

// ==========================================
// DOT MATRIX ANIMATION FOR NAV LOGO
// ==========================================

function initDotMatrixAnimation() {
    const canvas = document.getElementById('dotMatrixCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    
    // Text configuration
    const text = 'ADITYA KULKARNI';
    const fontSize = 16;
    const dotSize = 1.0;
    const dotSpacing = 1.8;
    
    // Calculate canvas size
    ctx.font = `900 ${fontSize}px Space Mono, monospace`;
    const textMetrics = ctx.measureText(text);
    const canvasWidth = Math.ceil(textMetrics.width) + 40;
    const canvasHeight = 32;
    
    // Set canvas size
    canvas.width = canvasWidth * dpr;
    canvas.height = canvasHeight * dpr;
    canvas.style.width = canvasWidth + 'px';
    canvas.style.height = canvasHeight + 'px';
    ctx.scale(dpr, dpr);
    
    // Create dot matrix from text
    let dots = [];
    
    function createDots() {
        dots = [];
        
        // Create a temporary higher resolution canvas for better sampling
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        const sampleScale = 2;
        
        tempCanvas.width = canvasWidth * sampleScale;
        tempCanvas.height = canvasHeight * sampleScale;
        
        tempCtx.font = `900 ${fontSize * sampleScale}px Space Mono, monospace`;
        const isDarkMode = document.body.classList.contains('dark-mode');
        tempCtx.fillStyle = isDarkMode ? 'black' : 'white';
        tempCtx.textBaseline = 'middle';
        tempCtx.fillText(text, 20 * sampleScale, (canvasHeight / 2) * sampleScale);
        
        const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
        
        // Sample at regular intervals
        for (let y = 0; y < canvasHeight; y += dotSpacing) {
            for (let x = 0; x < canvasWidth; x += dotSpacing) {
                // Sample from high-res version
                const sampleX = Math.floor(x * sampleScale);
                const sampleY = Math.floor(y * sampleScale);
                const i = (sampleY * tempCanvas.width + sampleX) * 4;
                const alpha = imageData.data[i + 3];
                
                if (alpha > 50) {
                    dots.push({
                        x: x,
                        y: y,
                        originX: x,
                        originY: y,
                        vx: 0,
                        vy: 0,
                        size: dotSize
                    });
                }
            }
        }
    }
    
    createDots();
    
    // Mouse interaction
    let mouse = { x: -1000, y: -1000 };
    const interactionRadius = 50;
    
    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });
    
    canvas.addEventListener('mouseleave', () => {
        mouse.x = -1000;
        mouse.y = -1000;
    });
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        
        dots.forEach(dot => {
            // Calculate distance to mouse
            const dx = mouse.x - dot.x;
            const dy = mouse.y - dot.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            // Apply force from mouse
            if (dist < interactionRadius) {
                const force = (interactionRadius - dist) / interactionRadius;
                dot.vx -= (dx / dist) * force * 3;
                dot.vy -= (dy / dist) * force * 3;
            }
            
            // Apply spring force back to origin
            const returnForce = 0.15;
            dot.vx += (dot.originX - dot.x) * returnForce;
            dot.vy += (dot.originY - dot.y) * returnForce;
            
            // Apply damping
            dot.vx *= 0.85;
            dot.vy *= 0.85;
            
            // Update position
            dot.x += dot.vx;
            dot.y += dot.vy;
            
            // Draw dot - black when hovered in dark mode, otherwise white
            const isDarkMode = document.body.classList.contains('dark-mode');
            const isHovered = dist < interactionRadius;
            ctx.fillStyle = (isDarkMode && isHovered) ? 'black' : 'white';
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
            ctx.fill();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Recreate dots on resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(createDots, 250);
    });
}

// Initialize dot matrix when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDotMatrixAnimation);
} else {
    initDotMatrixAnimation();
}

// ==========================================
// ARROW DOT MATRIX ANIMATION FOR SCROLL BUTTON
// ==========================================

function initArrowMatrixAnimation() {
    const canvas = document.getElementById('arrowMatrixCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    
    // Arrow configuration
    const arrowSize = 20;
    const dotSize = 1.0;
    const dotSpacing = 1.8;
    
    // Set canvas size
    canvas.width = 50 * dpr;
    canvas.height = 50 * dpr;
    canvas.style.width = '50px';
    canvas.style.height = '50px';
    ctx.scale(dpr, dpr);
    
    // Create dot matrix for up arrow
    let dots = [];
    
    function createArrowDots() {
        dots = [];
        
        // Create temporary canvas for sampling
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        const sampleScale = 3;
        
        tempCanvas.width = 50 * sampleScale;
        tempCanvas.height = 50 * sampleScale;
        
        // Draw inverted capital V symbol (V rotated 180 degrees)
        tempCtx.save();
        tempCtx.translate((50 * sampleScale) / 2, (50 * sampleScale) / 2);
        tempCtx.rotate(Math.PI);
        tempCtx.translate(-(50 * sampleScale) / 2, -(50 * sampleScale) / 2);
        const isDarkMode = document.body.classList.contains('dark-mode');
        tempCtx.fillStyle = isDarkMode ? 'black' : 'white';
        tempCtx.font = `bold ${32 * sampleScale}px Arial`;
        tempCtx.textAlign = 'center';
        tempCtx.textBaseline = 'middle';
        tempCtx.fillText('V', (50 * sampleScale) / 2, (50 * sampleScale) / 2);
        tempCtx.restore();
        
        const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
        
        // Sample at regular intervals
        for (let y = 0; y < 50; y += dotSpacing) {
            for (let x = 0; x < 50; x += dotSpacing) {
                const sampleX = Math.floor(x * sampleScale);
                const sampleY = Math.floor(y * sampleScale);
                const i = (sampleY * tempCanvas.width + sampleX) * 4;
                const alpha = imageData.data[i + 3];
                
                if (alpha > 50) {
                    dots.push({
                        x: x,
                        y: y,
                        originX: x,
                        originY: y,
                        vx: 0,
                        vy: 0,
                        size: dotSize
                    });
                }
            }
        }
    }
    
    createArrowDots();
    
    // Mouse interaction
    let mouse = { x: -1000, y: -1000 };
    const interactionRadius = 40;
    
    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });
    
    canvas.addEventListener('mouseleave', () => {
        mouse.x = -1000;
        mouse.y = -1000;
    });
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, 50, 50);
        
        dots.forEach(dot => {
            // Calculate distance to mouse
            const dx = mouse.x - dot.x;
            const dy = mouse.y - dot.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            // Apply force from mouse
            if (dist < interactionRadius) {
                const force = (interactionRadius - dist) / interactionRadius;
                dot.vx -= (dx / dist) * force * 2.5;
                dot.vy -= (dy / dist) * force * 2.5;
            }
            
            // Apply spring force back to origin
            const returnForce = 0.12;
            dot.vx += (dot.originX - dot.x) * returnForce;
            dot.vy += (dot.originY - dot.y) * returnForce;
            
            // Apply damping
            dot.vx *= 0.85;
            dot.vy *= 0.85;
            
            // Update position
            dot.x += dot.vx;
            dot.y += dot.vy;
            
            // Draw dot - black in dark mode, white in light mode
            const isDarkMode = document.body.classList.contains('dark-mode');
            ctx.fillStyle = isDarkMode ? 'black' : 'white';
            ctx.beginPath();
            ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
            ctx.fill();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Recreate dots on resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(createArrowDots, 250);
    });
}

// Initialize arrow dot matrix when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initArrowMatrixAnimation);
} else {
    initArrowMatrixAnimation();
}

// Dark Mode Toggle
function initializeDarkMode() {
    const darkModeBtn = document.getElementById('darkModeBtn');
    const modeIcon = document.getElementById('modeIcon');
    const html = document.documentElement;
    
    // Check if user has a saved preference
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial state based on: saved preference > system preference > light mode (false)
    const isDarkMode = savedMode !== null ? savedMode === 'true' : prefersDark;
    
    if (isDarkMode) {
        html.style.colorScheme = 'dark';
        document.body.classList.add('dark-mode');
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
    } else {
        html.style.colorScheme = 'light';
        document.body.classList.remove('dark-mode');
        modeIcon.classList.add('fa-moon');
        modeIcon.classList.remove('fa-sun');
    }
    
    // Add click listener
    darkModeBtn.addEventListener('click', function() {
        const isCurrentlyDark = document.body.classList.contains('dark-mode');
        
        if (isCurrentlyDark) {
            // Switch to light mode
            html.style.colorScheme = 'light';
            document.body.classList.remove('dark-mode');
            modeIcon.classList.remove('fa-sun');
            modeIcon.classList.add('fa-moon');
            localStorage.setItem('darkMode', 'false');
        } else {
            // Switch to dark mode
            html.style.colorScheme = 'dark';
            document.body.classList.add('dark-mode');
            modeIcon.classList.remove('fa-moon');
            modeIcon.classList.add('fa-sun');
            localStorage.setItem('darkMode', 'true');
        }
    });
    
    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        // Only auto-switch if user hasn't set a preference
        if (localStorage.getItem('darkMode') === null) {
            if (e.matches) {
                html.style.colorScheme = 'dark';
                document.body.classList.add('dark-mode');
                modeIcon.classList.remove('fa-moon');
                modeIcon.classList.add('fa-sun');
            } else {
                html.style.colorScheme = 'light';
                document.body.classList.remove('dark-mode');
                modeIcon.classList.add('fa-moon');
                modeIcon.classList.remove('fa-sun');
            }
        }
    });
}

// Populate updates timeline
function populateUpdates() {
    const updatesContainer = document.getElementById('updates-timeline');
    if (!updatesContainer || typeof updates === 'undefined') return;
    
    updatesContainer.innerHTML = `
        <div class="timeline-track">
            <div class="timeline-line"></div>
            <div class="timeline-items">
                ${updates.map((update, index) => {
                    const isTop = index % 2 === 0;
                    return `
                        <div class="timeline-item ${isTop ? 'top' : 'bottom'}">
                            <div class="timeline-dot"></div>
                            <div class="timeline-card">
                                <h4 class="update-title">${update.title}</h4>
                                <div class="timeline-card-expanded">
                                    <div class="update-date">
                                        <span class="update-month">${update.month}</span>
                                        <span class="update-year">${update.year}</span>
                                    </div>
                                    <p class="update-description">${update.description}</p>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

// Populate blogs grid
function populateBlogs() {
    const blogsContainer = document.getElementById('blogs-grid');
    if (!blogsContainer || typeof blogs === 'undefined') return;
    
    blogsContainer.innerHTML = blogs.map(blog => `
        <div class="blog-card">
            <div class="blog-card-content">
                <span class="blog-category">${blog.category}</span>
                <h3 class="blog-title">${blog.title}</h3>
                <p class="blog-date">${blog.date}</p>
                <p class="blog-excerpt">${blog.excerpt}</p>
            </div>
        </div>
    `).join('');
    
    // Attach read more handlers
    document.querySelectorAll('.blog-read-more').forEach(btn => {
        btn.addEventListener('click', () => loadBlogModal(btn.dataset.blogId));
    });
}

// Load blog content in modal
function loadBlogModal(blogId) {
    const modal = document.getElementById('blogModal');
    const blogContent = document.getElementById('blogContent');
    
    if (!modal || !blogContent || typeof blogs === 'undefined') return;
    
    const blog = blogs.find(b => b.id === parseInt(blogId));
    if (!blog) return;
    
    blogContent.innerHTML = blog.content;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close blog modal
function closeBlogModal() {
    const modal = document.getElementById('blogModal');
    if (!modal) return;
    
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Initialize blog modal handlers
function initBlogModal() {
    const modal = document.getElementById('blogModal');
    const modalClose = document.getElementById('modalClose');
    
    if (!modal || !modalClose) return;
    
    // Close on button click
    modalClose.addEventListener('click', closeBlogModal);
    
    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeBlogModal();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeBlogModal();
        }
    });
}

// Work section scrollbar functionality
function scrollToWorkStep(step) {
    const heroSection = document.getElementById('home');
    const experienceSection = document.getElementById('experience');
    const workSection = document.getElementById('work');
    const scrollbarSteps = document.querySelectorAll('.scrollbar-step');
    
    if (!heroSection || !experienceSection || !workSection) return;
    
    // Update active step indicator
    scrollbarSteps.forEach((stepEl, index) => {
        stepEl.classList.toggle('active', (index + 1) === step);
    });
    
    // Calculate scroll position based on step
    let scrollTarget = 0;
    const navHeight = 60;
    
    if (step === 1) {
        // Hero section
        scrollTarget = heroSection.offsetTop - navHeight;
    } else if (step === 2) {
        // Experience section
        scrollTarget = experienceSection.offsetTop - navHeight;
    } else if (step === 3) {
        // Work section
        scrollTarget = workSection.offsetTop - navHeight;
    }
    
    window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
}

function initWorkScrollbar() {
    const scrollbarSteps = document.querySelectorAll('.scrollbar-step');
    
    // Click handlers for scrollbar steps - smooth scroll to sections
    scrollbarSteps.forEach((stepEl, index) => {
        stepEl.addEventListener('click', () => {
            scrollToWorkStep(index + 1);
        });
    });
    
    // Update active step based on scroll position (natural scrolling)
    let ticking = false;
    
    function updateStepBasedOnScroll() {
        const workScrollbar = document.getElementById('workScrollbar');
        if (!workScrollbar || !workScrollbar.classList.contains('active')) return;
        
        const heroSection = document.getElementById('home');
        const experienceSection = document.getElementById('experience');
        const workSection = document.getElementById('work');
        
        if (!heroSection || !experienceSection || !workSection) return;
        
        const scrollPos = window.scrollY;
        const navHeight = 60;
        
        // Get section positions
        const heroTop = heroSection.offsetTop;
        const heroBottom = heroTop + heroSection.offsetHeight;
        const experienceTop = experienceSection.offsetTop;
        const experienceBottom = experienceTop + experienceSection.offsetHeight;
        const workTop = workSection.offsetTop;
        
        // Determine which section is most visible
        let currentStep = 1;
        const viewportCenter = scrollPos + window.innerHeight / 2;
        
        if (viewportCenter >= workTop) {
            currentStep = 3;
        } else if (viewportCenter >= experienceTop) {
            currentStep = 2;
        } else {
            currentStep = 1;
        }
        
        // Update step indicator
        scrollbarSteps.forEach((stepEl, index) => {
            stepEl.classList.toggle('active', (index + 1) === currentStep);
        });
    }
    
    // Throttled scroll event listener using requestAnimationFrame
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateStepBasedOnScroll();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
    
    // Initial update
    updateStepBasedOnScroll();
}

// Initialize dark mode when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeDarkMode);
} else {
    initializeDarkMode();
}

// Initialize work scrollbar when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWorkScrollbar);
} else {
    initWorkScrollbar();
}

// Initialize updates timeline when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', populateUpdates);
} else {
    populateUpdates();
}

// Initialize blogs when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        populateBlogs();
        initBlogModal();
    });
} else {
    populateBlogs();
    initBlogModal();
}

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        populateWork,
        populateSkills,
        populateExperience,
        populateCertifications
    };
}
