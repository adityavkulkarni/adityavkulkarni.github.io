// app-new.js - Script for the new brutalist design
// Portfolio data is now imported from data.js
document.addEventListener('DOMContentLoaded', function() {
    // Populate Hero Section
    populateHero();
    
    // Populate About Section
    populateAbout();
    
    // Set Resume Button Link
    setResumeButtonLink();
    
    // Populate Work Section
    populateWork();
    
    // Populate Skills
    populateSkills();
    
    // Populate Education Timeline
    populateEducation();
    
    // Populate Experience Timeline
    populateExperience();
    
    // Populate Certifications
    populateCertifications();
    
    // Populate Resume Section
    populateResume();
    
    // Initialize interactions
    initializeInteractions();
});

function populateHero() {
    const heroCard = document.getElementById('hero-card');
    if (!heroCard) return;
    
    const heroData = hero || {};
    const personalInfoData = personalInfo || {};
    
    heroCard.innerHTML = `
        <h1 class="hero-title">${heroData.title || 'Welcome'}</h1>
        <p class="hero-status">${heroData.currentStatus || ''}</p>
        ${heroData.previousPositions ? heroData.previousPositions.map(pos => `<p class="hero-status">${pos}</p>`).join('') : ''}
        <div class="hero-cta">
            <a href="${personalInfoData.resumeUrl || '#'}" class="btn-primary" target="_blank">RESUME</a>
            <a href="${personalInfoData.linkedin || '#'}" class="btn-secondary" target="_blank">LINKEDIN</a>
            <a href="mailto:${personalInfoData.email || ''}" class="btn-secondary" target="_blank">EMAIL</a>
            <a href="${personalInfoData.github || '#'}" class="btn-secondary" target="_blank">GITHUB</a>
        </div>
    `;
}

function populateAbout() {
    const aboutText = document.getElementById('about-text');
    if (!aboutText) return;
    
    const aboutData = about || {};
    const personalInfoData = personalInfo || {};
    
    aboutText.innerHTML = `
        <p class="about-intro">${aboutData.intro || ''}</p>
        <p>${aboutData.description || ''}</p>
        <div class="about-details">
            <div class="detail-item">
                <span class="detail-label">LOCATION</span>
                <span class="detail-value">${personalInfoData.location || ''}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">EMAIL</span>
                <span class="detail-value"><a href="mailto:${personalInfoData.email || ''}">${personalInfoData.email || ''}</a></span>
            </div>
            <div class="detail-item">
                <span class="detail-label">CONNECT</span>
                <span class="detail-value">
                    <a href="${personalInfoData.linkedin || '#'}" target="_blank">LinkedIn</a> · 
                    <a href="${personalInfoData.github || '#'}" target="_blank">GitHub</a>
                </span>
            </div>
        </div>
    `;
}

function setResumeButtonLink() {
    const resumeBtn = document.getElementById('downloadResumeBtn');
    if (!resumeBtn) return;
    
    const personalInfoData = personalInfo || {};
    if (personalInfoData.resumeUrl) {
        resumeBtn.href = personalInfoData.resumeUrl;
    }
}

function populateWork() {
    const workGrid = document.getElementById('work-grid');
    if (!workGrid) return;
    
    // Clear existing content
    workGrid.innerHTML = '';
    
    // Use projects from portfolioData
    const projectsData = projects || [];
    
    if (projectsData.length === 0) {
        workGrid.innerHTML = '<p>Projects loading...</p>';
        return;
    }
    
    // Show featured projects (first 6)
    const featuredProjects = projectsData.slice(0, 6);
    
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
    const skillsData = skills || {};
    
    // Get top skills from portfolioData
    const actualTopSkills = skillsData.topSkills || [];
    
    actualTopSkills.forEach(skill => {
        const skillTag = document.createElement('div');
        skillTag.className = 'skill-tag';
        skillTag.textContent = skill;
        skillsContainer.appendChild(skillTag);
    });
}

function populateEducation() {
    const timeline = document.getElementById('education-timeline');
    if (!timeline) return;
    
    // Clear existing content
    timeline.innerHTML = '';
    
    // Use education from portfolioData
    const educationData = education || [];
    
    if (educationData.length === 0) {
        timeline.innerHTML = '<p>Education data loading...</p>';
        return;
    }
    
    educationData.forEach(edu => {
        const eduRow = document.createElement('div');
        eduRow.className = 'education-row';
        eduRow.dataset.expanded = 'true';
        
        const logoHTML = edu.icon 
            ? `<img src="${edu.icon}" alt="${edu.institution} Logo">` 
            : `<div class="education-logo-placeholder">${edu.institution.charAt(0)}</div>`;
        
        const detailsHTML = edu.details && edu.details.length > 0
            ? `<ul class="education-details-list">
                ${edu.details.map(detail => `<li>${detail}</li>`).join('')}
               </ul>`
            : '';
        
        eduRow.innerHTML = `
            <div class="education-logo">
                ${logoHTML}
            </div>
            <div class="education-content">
                <div class="education-header">
                    <h3 class="education-institution">${edu.institution}</h3>
                    <span class="education-arrow" style="transform: rotate(180deg);">▼</span>
                </div>
                <div class="education-degree">${edu.degree}</div>
                <div class="education-details" style="display: block;">
                    <div class="education-meta">
                        <span class="education-duration">${edu.duration}</span>
                        ${edu.gpa ? `<span class="education-separator">•</span><span class="education-gpa">GPA: ${edu.gpa}</span>` : ''}
                    </div>
                    ${detailsHTML}
                </div>
            </div>
        `;
        
        // Add click handler for expand/collapse
        eduRow.addEventListener('click', function() {
            const isExpanded = this.dataset.expanded === 'true';
            const details = this.querySelector('.education-details');
            const arrow = this.querySelector('.education-arrow');
            
            if (isExpanded) {
                this.dataset.expanded = 'false';
                details.style.display = 'none';
                arrow.style.transform = 'rotate(0deg)';
            } else {
                this.dataset.expanded = 'true';
                details.style.display = 'block';
                arrow.style.transform = 'rotate(180deg)';
            }
        });
        
        timeline.appendChild(eduRow);
    });
}

function populateExperience() {
    const timeline = document.getElementById('experience-timeline');
    if (!timeline) return;
    
    // Clear existing content
    timeline.innerHTML = '';
    
    // Use timeline data from portfolioData.workExperience for detailed info
    const experiences = timeLine || [];
    
    if (experiences.length === 0) {
        timeline.innerHTML = '<p>Experience loading...</p>';
        return;
    }
    
    // Initialize with last entry active
    let activeIndex = experiences.length - 1;
    
    // Create timeline container
    const timelineWrapper = document.createElement('div');
    timelineWrapper.className = 'experience-timeline-wrapper';
    
    // Create markers line
    const markersContainer = document.createElement('div');
    markersContainer.className = 'experience-markers-container';
    
    const markerLine = document.createElement('div');
    markerLine.className = 'experience-marker-line';
    
    const markersWrapper = document.createElement('div');
    markersWrapper.className = 'experience-markers-wrapper';
    
    experiences.forEach((exp, index) => {
        const marker = document.createElement('button');
        marker.className = 'experience-marker';
        marker.setAttribute('data-index', index);
        if (index === activeIndex) {
            marker.classList.add('active');
        }
        marker.setAttribute('aria-label', `${exp.position} at ${exp.company}`);
        marker.addEventListener('click', (e) => {
            e.preventDefault();
            updateActiveExperience(index);
        });
        markersWrapper.appendChild(marker);
    });
    
    markerLine.appendChild(markersWrapper);
    
    // Left arrow
    const leftArrow = document.createElement('button');
    leftArrow.className = 'experience-arrow-btn experience-arrow-left';
    leftArrow.innerHTML = '<span class="arrow-symbol">&lt;</span>';
    leftArrow.setAttribute('aria-label', 'Previous experience');
    leftArrow.addEventListener('click', (e) => {
        e.preventDefault();
        if (activeIndex > 0) {
            updateActiveExperience(activeIndex - 1);
        }
    });
    
    // Right arrow
    const rightArrow = document.createElement('button');
    rightArrow.className = 'experience-arrow-btn experience-arrow-right';
    rightArrow.innerHTML = '<span class="arrow-symbol">&gt;</span>';
    rightArrow.setAttribute('aria-label', 'Next experience');
    rightArrow.addEventListener('click', (e) => {
        e.preventDefault();
        if (activeIndex < experiences.length - 1) {
            updateActiveExperience(activeIndex + 1);
        }
    });
    
    markersContainer.appendChild(leftArrow);
    markersContainer.appendChild(markerLine);
    markersContainer.appendChild(rightArrow);
    timelineWrapper.appendChild(markersContainer);
    
    // Create card container
    const cardContainer = document.createElement('div');
    cardContainer.className = 'experience-card-container';
    
    // Card content
    const card = document.createElement('div');
    card.className = 'experience-card';
    card.id = 'experience-card';
    
    cardContainer.appendChild(card);
    timelineWrapper.appendChild(cardContainer);
    
    timeline.appendChild(timelineWrapper);
    
    // Function to update active experience
    function updateActiveExperience(index) {
        if (index < 0 || index >= experiences.length) return;
        
        activeIndex = index;
        
        // Update markers
        document.querySelectorAll('.experience-marker').forEach((m, i) => {
            m.classList.toggle('active', i === activeIndex);
        });
        
        // Update card with transition
        const card = document.getElementById('experience-card');
        card.classList.add('transitioning');
        
        setTimeout(() => {
            renderExperienceCard(experiences[activeIndex]);
            card.classList.remove('transitioning');
        }, 150);
        
        // Update arrow states
        leftArrow.disabled = activeIndex === 0;
        rightArrow.disabled = activeIndex === experiences.length - 1;
    }
    
    // Initial render with correct arrow states
    updateActiveExperience(activeIndex);
}

function renderExperienceCard(experience) {
    const card = document.getElementById('experience-card');
    if (!card) return;
    
    // Format date for display
    const dateStr = experience.startDate || experience.Date || '';
    const [year, month] = dateStr.split('-');
    const monthNames = ['', 'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const formattedDate = `${monthNames[parseInt(month) || 1]} ${year}`;
    
    // Format tags/technologies
    const tags = experience.technologies || [];
    const tagsHTML = tags.length > 0 
        ? `<div class="experience-tags">${tags.map(tag => `<span class="experience-tag">${tag}</span>`).join('')}</div>`
        : '';
    
    // Format description as bullet points if it's an array
    const descriptionHTML = Array.isArray(experience.description)
        ? `<ul class="experience-card-description">${experience.description.map(item => `<li>${item}</li>`).join('')}</ul>`
        : `<p class="experience-card-description">${experience.description || ''}</p>`;
    
    card.innerHTML = `
        <div class="experience-card-date">${formattedDate}</div>
        <h3 class="experience-card-position">${experience.position}</h3>
        <div class="experience-card-company">${experience.company}</div>
        ${tagsHTML}
        <br>
        ${descriptionHTML}
    `;
}

function populateCertifications() {
    const certGrid = document.getElementById('cert-grid');
    if (!certGrid) return;
    
    // Clear existing content
    certGrid.innerHTML = '';
    
    // Use certifications from portfolioData
    const certificationsData = certifications || [];
    
    if (certificationsData.length === 0) {
        certGrid.innerHTML = '<p>Certifications loading...</p>';
        return;
    }
    
    certificationsData.forEach(cert => {
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

function populateResume() {
    const resumeContainer = document.getElementById('resume-content');
    if (!resumeContainer) return;
    
    // Clear existing content
    resumeContainer.innerHTML = '';
    
    const personalInfoData = personalInfo || {};
    const experiences = workExperience || [];
    const educationData = education || [];
    const skillsData = skills || {};
    const projectsData = projects || [];
    
    // Build resume HTML
    let resumeHTML = `
        <div class="resume-header">
            <div class="resume-title-section">
                <h1 class="resume-name">${personalInfoData.name || 'Name'}</h1>
                <p class="resume-title">${personalInfoData.title || 'Title'}</p>
            </div>
            <div class="resume-contact">
                <a href="mailto:${personalInfoData.email}" class="resume-contact-item">${personalInfoData.email}</a>
                <span class="resume-contact-separator">•</span>
                <span class="resume-contact-item">${personalInfoData.phone}</span>
                <span class="resume-contact-separator">•</span>
                <span class="resume-contact-item">${personalInfoData.location}</span>
            </div>
            <div class="resume-links">
                ${personalInfoData.linkedin ? `<a href="${personalInfoData.linkedin}" target="_blank" class="resume-link">LinkedIn</a>` : ''}
                ${personalInfoData.github ? `<a href="${personalInfoData.github}" target="_blank" class="resume-link">GitHub</a>` : ''}
            </div>
        </div>

        <div class="resume-section">
            <h2 class="resume-section-title">EDUCATION</h2>
            <div class="resume-entries">
                ${educationData.map(edu => `
                    <div class="resume-entry">
                        <div class="resume-entry-header">
                            <div class="resume-entry-title">${edu.degree}</div>
                            <div class="resume-entry-date">${edu.duration}</div>
                        </div>
                        <div class="resume-entry-subtitle">${edu.institution} ${edu.gpa ? `• GPA: ${edu.gpa}` : ''}</div>
                        ${edu.details && edu.details.length > 0 ? `
                            <ul class="resume-entry-list">
                                ${edu.details.map(detail => `<li>${detail}</li>`).join('')}
                            </ul>
                        ` : ''}
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="resume-section">
            <h2 class="resume-section-title">EXPERIENCE</h2>
            <div class="resume-entries">
                ${experiences.map(exp => `
                    <div class="resume-entry">
                        <div class="resume-entry-header">
                            <div class="resume-entry-title">${exp.position}</div>
                            <div class="resume-entry-date">${exp.duration}</div>
                        </div>
                        <div class="resume-entry-subtitle">${exp.company} • ${exp.location}</div>
                        ${exp.responsibilities && exp.responsibilities.length > 0 ? `
                            <ul class="resume-entry-list">
                                ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                            </ul>
                        ` : ''}
                        ${exp.technologies && exp.technologies.length > 0 ? `
                            <div class="resume-tech-tags">
                                ${exp.technologies.map(tech => `<span class="resume-skill-tag">${tech}</span>`).join('')}
                            </div>
                        ` : ''}
                    </div>
                `).join('')}
            </div>
        </div>

        

        <div class="resume-section">
            <h2 class="resume-section-title">PROJECTS</h2>
            <div class="resume-entries">
                ${projectsData && projectsData.length > 0 ? projectsData.slice(0, 6).map(project => `
                    <div class="resume-entry">
                        <div class="resume-entry-header">
                            <div class="resume-entry-title">${project.title}</div>
                            <div class="resume-entry-date">${project.category}</div>
                        </div>
                        ${project.description ? `<p class="resume-project-description">${project.description.replace(/<br>/g, ' ')}</p>` : ''}
                        ${(project.githubUrl || project.liveUrl) ? `
                            <div class="resume-project-links">
                                ${project.githubUrl ? `<a href="${project.githubUrl}" class="resume-project-link" target="_blank">GitHub →</a>` : ''}
                                ${project.liveUrl ? `<a href="${project.liveUrl}" class="resume-project-link" target="_blank">Live →</a>` : ''}
                            </div>
                        ` : ''}
                        ${project.techStack && project.techStack.length > 0 ? `
                            <div class="resume-tech-tags">
                                ${project.techStack.map(tech => `<span class="resume-skill-tag">${tech}</span>`).join('')}
                            </div>
                        ` : ''}
                    </div>
                `).join('') : ''}
            </div>
        </div>

        <div class="resume-section">
            <h2 class="resume-section-title">SKILLS</h2>
            <div class="resume-skills-grid">
                ${skillsData.categories ? Object.entries(skillsData.categories).map(([category, skillList]) => `
                    <div class="resume-skill-category">
                        <h3 class="resume-skill-category-name">${category}</h3>
                        <div class="resume-skill-tags">
                            ${skillList.map(skill => `<span class="resume-skill-tag">${skill}</span>`).join('')}
                        </div>
                    </div>
                `).join('') : ''}
            </div>
        </div>
    `;
    
    resumeContainer.innerHTML = resumeHTML;
}

function initializeInteractions() {
    const sectionTriggers = document.querySelectorAll('[data-section]');
    const navLinks = document.querySelectorAll('.nav-link[data-section]');
    const sections = document.querySelectorAll('.content-section');
    let resizeTimeout;

    const sectionMap = {
        home: ['home', 'about'],
        hero: ['home', 'about'], // alias for any existing hero references
        about: ['home', 'about'],
        education: ['education'],
        experience: ['experience'],
        work: ['work'],
        certification: ['certification'],
        resume: ['resume'],
        play: ['play']
    };

    const setActiveSections = (key) => {
        // Prefer explicit map entries; fall back to a section whose id matches the key; otherwise default home
        const directTarget = document.getElementById(key) ? [key] : null;
        const targets = sectionMap[key] || directTarget || sectionMap.home;

        sections.forEach(section => {
            const shouldShow = targets.includes(section.id);
            section.classList.toggle('active', shouldShow);
        });

        navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.section === key);
        });

        // Handle scroll locking and work scrollbar
        const workScrollbar = document.getElementById('workScrollbar');
        const showingHeroAbout = targets.includes('home') || targets.includes('about');

        document.body.classList.remove('scroll-lock');
        if (workScrollbar) {
            workScrollbar.classList.toggle('active', showingHeroAbout);
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
    setActiveSections('home');
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

// Populate blogs grid
function populateBlogs() {
    const blogsContainer = document.getElementById('blogs-grid');
    if (!blogsContainer || typeof window.blogs === 'undefined') return;
    
    blogsContainer.innerHTML = window.blogs.map(blog => `
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
    
    if (!modal || !blogContent || typeof window.blogs === 'undefined') return;
    
    const blog = window.blogs.find(b => b.id === parseInt(blogId));
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
    const aboutSection = document.getElementById('about');
    const scrollbarSteps = document.querySelectorAll('.scrollbar-step');
    
    if (!heroSection || !aboutSection) return;
    
    // Update active step indicator
    scrollbarSteps.forEach((stepEl, index) => {
        stepEl.classList.toggle('active', (index + 1) === step);
    });
    
    // Calculate scroll position based on step
    const navHeight = 60;
    const clampedStep = Math.min(Math.max(step, 1), 2);
    const scrollTarget = (clampedStep === 1 ? heroSection : aboutSection).offsetTop - navHeight;
    
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
        const aboutSection = document.getElementById('about');

        if (!heroSection || !aboutSection) return;

        const scrollPos = window.scrollY;
        const aboutTop = aboutSection.offsetTop;
        const viewportCenter = scrollPos + window.innerHeight / 2;

        const currentStep = viewportCenter >= aboutTop ? 2 : 1;
        
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
