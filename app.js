// Portfolio data
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
      "title": "Agentic PDF Parser",
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
      "title": "2D Dynamic Object Grasping",
      "description": "A robotics project featuring a sophisticated system for real-time detection and tracking of deterministically moving objects in 2D. It uses a predictive algorithm to enable a robotic manipulator to calculate optimal grasping points and trajectories with high precision. The primary simulation environment is Gazebo. The system leverages OpenCV for computer vision and integrates with ROS (Robot Operating System) to create a seamless interface between vision processing and robotic control systems.",
      "image": "assets/ros.png",
      "techStack": ["Gazebo", "OpenCV", "ROS", "Python", "Robotics"],
      "githubUrl": "https://github.com/adityavkulkarni/2D_dynamic_object_grasping",
      "liveUrl": "https://utdallas.app.box.com/s/mlh7mzs4jasjsx9vxsymagupyqrti79v",
      "category": "Robotics"
    },
    {
      "id": 5,
      "title": "InvestAid: An AI-powered Investment Dashboard",
      "description": "Designed an AI-powered investment advisory system leveraging NLP and aspect-based sentiment detection techniques. Utilized Spacy models to analyze sentiment and topics in over 50,000 social media posts and financial news articles, achieving a classification accuracy of 85% and identifying 10 key topics relevant to financial markets. Integrated historical data analysis to generate data-driven stock position recommendations for the top 3 performing stocks.",
      "image": "assets/investaid.png",
      "techStack": ["NLP", "Spacy", "Sentiment Analysis", "Aspect-based Sentiment Detection", "Financial Data Analysis", "Python"],
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
      "duration": "June 2025 - Present",
      "startDate": "2025-06",
      "endDate": "Present",
      "location": "Dallas, TX(remote)",
      "icon": "",
      "responsibilities": [
        "Built an advanced Agentic Graph-based RAG pipeline to parse, structure, and store contracts, leases, and sequential amendments as interconnected knowledge graphs, enabling relationship analysis and efficient retrieval.",
        "Automated query classification and tool selection using agentic workflows, enabling intelligent selection between vector search, graph traversal, and hybrid approaches based on the query type and context.",
        "Enabled dynamic, recursive retrieval and robust error handling through agent-driven feedback loops, ensuring accurate extraction of contract metadata, parties, dates, monetary values, and amendment relationships for legal and compliance use cases."
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
    "icon": "",
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
    "icon": "",
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
    "icon": "",
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
            "HuggingFace Transformers"
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

// DOM Elements
const nav = document.getElementById('nav');
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initNavigation();
  renderProjects();
  renderExperience();
  renderEducation();
  renderSkills();
  renderCertifications();
  initScrollAnimations();
  //initContactForm();
  initProjectFilters();
});

// Navigation functionality - Fixed smooth scrolling
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav__link');
  
  // Mobile menu toggle
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }

  // Close mobile menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('active');
    });
  });

  // Smooth scrolling for navigation links - Fixed
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        const navHeight = nav.offsetHeight;
        const targetPosition = targetSection.offsetTop - navHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Active section highlighting on scroll - Fixed
  window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    const navHeight = nav.offsetHeight;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - navHeight - 50;
      const sectionBottom = sectionTop + section.clientHeight;
      
      if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionBottom) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// Render projects
function renderProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  
  portfolioData.projects.forEach((project, index) => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card fade-in';
    projectCard.setAttribute('data-category', project.category);
    projectCard.style.animationDelay = `${index * 0.1}s`;
    
    const techTags = project.techStack.map(tech => 
      `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    projectCard.innerHTML = `
      <div class="project-card__image">
        <span class="project-card__image"><img src="${project.image}" alt="" /></span>
      </div>
      <div class="project-card__content">
        <div class="project-card__header">
          <h3 class="project-card__title">${project.title}</h3>
        </div>
        <p class="project-card__description">${project.description}</p>
        <div class="project-card__tech">
          ${techTags}
        </div>
        <div class="project-card__links">
          <a href="${project.githubUrl}" target="_blank" class="project-link">GitHub</a>
          <!--<a href="${project.liveUrl}" target="_blank" class="project-link">Live Demo</a>-->
        </div>
      </div>
    `;
    
    projectsGrid.appendChild(projectCard);
  });
}

// Render work experience
function renderExperience() {
  const experienceTimeline = document.getElementById('experience-timeline');
  
  portfolioData.workExperience.forEach((job, index) => {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline__item fade-in';
    timelineItem.style.animationDelay = `${index * 0.2}s`;
    
    const responsibilities = job.responsibilities.map(resp => 
      `<li>${resp}</li>`
    ).join('');
    
    const techTags = job.technologies.map(tech => 
      `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    timelineItem.innerHTML = `
      <div class="timeline__content">
        <h3 class="timeline__company">${job.company}</h3>
        <h4 class="timeline__position">${job.position}</h4>
        <div class="timeline__duration">${job.duration} • ${job.location}</div>
        <ul class="timeline__responsibilities">
          ${responsibilities}
        </ul>
        <div class="timeline__tech">
          ${techTags}
        </div>
      </div>
      <div class="timeline__marker">${job.icon}</div>
    `;
    
    experienceTimeline.appendChild(timelineItem);
  });
}

// Render education
function renderEducation() {
  const educationGrid = document.getElementById('education-grid');
  
  portfolioData.education.forEach((edu, index) => {
    const educationCard = document.createElement('div');
    educationCard.className = 'education-card fade-in';
    educationCard.style.animationDelay = `${index * 0.2}s`;
    
    const details = edu.details ? edu.details.map(detail => 
      `<li>${detail}</li>`
    ).join('') : '';
    
    educationCard.innerHTML = `
      <div class="education-card__header">

        <div class="education-card__icon "><img src="${edu.icon}" alt="" /></div>
        <div>
          <h3 class="education-card__title">${edu.degree}</h3>
          <div class="education-card__institution">${edu.institution}</div>
        </div>
      </div>
      <div class="education-card__duration">${edu.duration}${edu.gpa ? ` • GPA: ${edu.gpa}` : ''}</div>
      <div class="education-card__details">
        <ul>
          ${details}
        </ul>
      </div>
    `;
    
    // Add click handler for expansion with visual feedback
    educationCard.addEventListener('click', function() {
      this.classList.toggle('expanded');
      
      // Add visual feedback
      const details = this.querySelector('.education-card__details');
      if (this.classList.contains('expanded')) {
        details.style.paddingTop = '16px';
        details.style.borderTop = '1px solid var(--color-border)';
      } else {
        details.style.paddingTop = '0';
        details.style.borderTop = 'none';
      }
    });
    
    educationGrid.appendChild(educationCard);
  });
}

// Render skills
function renderSkills() {
  // Render top skills
  const topSkillsContainer = document.getElementById('top-skills');
  portfolioData.skills.topSkills.forEach((skill, index) => {
    const skillElement = document.createElement('div');
    skillElement.className = 'top-skill fade-in';
    skillElement.style.animationDelay = `${index * 0.1}s`;
    skillElement.textContent = skill;
    topSkillsContainer.appendChild(skillElement);
  });
  
  // Render skill categories
  const skillsCategoriesContainer = document.getElementById('skills-categories');
  Object.entries(portfolioData.skills.categories).forEach(([category, skills], categoryIndex) => {
    const categoryElement = document.createElement('div');
    categoryElement.className = 'skill-category fade-in';
    categoryElement.style.animationDelay = `${categoryIndex * 0.1}s`;
    
    const skillItems = skills.map(skill => 
      `<div class="skill-item" title="Click to learn more about ${skill}">${skill}</div>`
    ).join('');
    
    categoryElement.innerHTML = `
      <h3 class="skill-category__title">${category}</h3>
      <div class="skill-category__items">
        ${skillItems}
      </div>
    `;
    
    skillsCategoriesContainer.appendChild(categoryElement);
  });
  
  // Add enhanced hover effects for skill items
  setTimeout(() => {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
      item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
        this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
      });
      
      item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = 'none';
      });
    });
  }, 1000);
}

// Render certifications
function renderCertifications() {
  const certificationsGrid = document.getElementById('certifications-grid');
  
  portfolioData.certifications.forEach((cert, index) => {
    const certCard = document.createElement('div');
    certCard.className = 'cert-card fade-in';
    certCard.style.animationDelay = `${index * 0.2}s`;
    
    const dateFormatted = new Date(cert.dateEarned + '-01').toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    });
    
    certCard.innerHTML = `
      <div class="cert-card__badge"><img src="${cert.badge}" alt="" /></div>
      <h3 class="cert-card__name">${cert.name}</h3>
      <div class="cert-card__issuer">${cert.issuer}</div>
      <div class="cert-card__date">Earned: ${dateFormatted}</div>
      <a href="${cert.verifyUrl}" target="_blank" class="cert-link">Verify Certificate</a>
    `;
    
    certificationsGrid.appendChild(certCard);
  });
}

// Project filters
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      // Filter projects with smooth animation
      projectCards.forEach((card, index) => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          
          setTimeout(() => {
            card.style.transition = 'all 0.5s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, index * 100);
        } else {
          card.style.transition = 'all 0.3s ease-out';
          card.style.opacity = '0';
          card.style.transform = 'translateY(-20px)';
          
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

// Enhanced scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  // Observe all elements with fade-in class
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
}


// Add typing animation effect for hero text
function initTypingAnimation() {
  const heroRole = document.querySelector('.hero__role');
  if (!heroRole) return;
  
  const text = heroRole.textContent;
  heroRole.textContent = '';
  heroRole.style.opacity = '1'; // Make sure it's visible for typing
  
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      heroRole.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  }
  
  // Start typing animation after hero name appears
  setTimeout(typeWriter, 1200);
}

// Initialize typing animation
//setTimeout(initTypingAnimation, 500);
initTypingAnimation();

// Add click handlers for social links to prevent default if they're placeholders
document.addEventListener('click', function(e) {
  if (e.target.matches('.social-link, .project-link, .cert-link')) {
    const href = e.target.getAttribute('href');
    if (href && (href.includes('demo-') || href.includes('placeholder') || href === '#')) {
      e.preventDefault();
      alert('This is a demo link. In a real portfolio, this would navigate to the actual resource.');
    }
  }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Initialize everything when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}

function initAll() {
  // Re-run initialization to make sure everything works
  setTimeout(() => {
    initScrollAnimations();
  }, 100);
}

const toggleBtn = document.getElementById("darkModeBtn");
const body = document.body;
const modeIcon = document.getElementById('modeIcon');


// Set initial mode based on system preference or a saved preference
const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
  document.documentElement.setAttribute("data-color-scheme", "dark");
  //toggleBtn.textContent = "Light Mode☀️"; // Sun icon for light mode toggle
  modeIcon.classList.replace('fa-moon', 'fa-sun');
} else {
  document.documentElement.setAttribute("data-color-scheme", "light");
  //toggleBtn.innerHTML = '<i id="modeIcon" class="fas fa-moon"></i>';
  modeIcon.classList.replace('fa-sun', 'fa-moon');
}

toggleBtn.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-color-scheme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-color-scheme", newTheme);
  localStorage.setItem('theme', newTheme); // Save preference
  //toggleBtn.innerHTML = newTheme === "dark" ? "Light Mode☀️" : '<i id="modeIcon" class="fas fa-moon"></i>';;
  if (newTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
  modeIcon.classList.replace('fa-moon', 'fa-sun');
} else {
  modeIcon.classList.replace('fa-sun', 'fa-moon');
}
});