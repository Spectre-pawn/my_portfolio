// Code Rain Animation
function createCodeRain() {
    const codeRainContainer = document.querySelector('.code-rain');
    if (!codeRainContainer) return;
    
    const characters = '01';
    const numberOfDrops = 50;

    for (let i = 0; i < numberOfDrops; i++) {
        const drop = document.createElement('span');
        drop.className = 'code-drop';
        drop.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
        drop.style.left = `${Math.random() * 100}%`;
        drop.style.animationDuration = `${Math.random() * 2 + 1}s`;
        drop.style.opacity = Math.random();
        codeRainContainer.appendChild(drop);
    }
}

// Scroll Animation for Timeline
function animateOnScroll() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const projectCards = document.querySelectorAll('.project-card');
    const contactItems = document.querySelectorAll('.contact-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = 'all 0.6s ease-out';
        observer.observe(item);
    });

    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    contactItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = 'all 0.6s ease-out';
        observer.observe(item);
    });
}

// Parallax Effect for About Section
function parallaxEffect() {
    const aboutSection = document.querySelector('#about');
    if (!aboutSection) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        aboutSection.style.backgroundPosition = `center ${rate}px`;
    });
}

// Tech Stack Animation
function animateTechStack() {
    const techBadges = document.querySelectorAll('.tech-badge');
    techBadges.forEach((badge, index) => {
        badge.style.animationDelay = `${index * 0.1}s`;
        badge.style.animation = 'float 3s ease-in-out infinite';
    });
}

// Binary Background for Footer
function createBinaryBackground() {
    const container = document.getElementById('binaryContainer');
    if (!container) return;
    
    const numberOfElements = 20;

    for (let i = 0; i < numberOfElements; i++) {
        const binary = document.createElement('div');
        binary.className = 'footer-binary';
        binary.style.left = `${Math.random() * 100}%`;
        binary.style.top = `${Math.random() * 100}%`;
        binary.style.animationDuration = `${Math.random() * 5 + 5}s`;
        binary.textContent = Math.random() > 0.5 ? '0' : '1';
        container.appendChild(binary);
    }
}

// Responsive Navigation Setup
function setupResponsiveNavigation() {
    // Create nav container
    const navContainer = document.createElement('div');
    navContainer.className = 'nav-container';
    
    // Get the original nav element
    const originalNav = document.querySelector('nav');
    if (!originalNav) return;
    
    const navContent = originalNav.innerHTML;
    
    // Create hamburger button
    const hamburger = document.createElement('button');
    hamburger.className = 'hamburger';
    hamburger.setAttribute('aria-label', 'Toggle navigation menu');
    hamburger.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;
    
    // Create backdrop element
    const backdrop = document.createElement('div');
    backdrop.className = 'backdrop';
    document.body.appendChild(backdrop);
    
    // Replace original nav with container
    originalNav.innerHTML = '';
    navContainer.innerHTML = navContent;
    navContainer.appendChild(hamburger);
    originalNav.appendChild(navContainer);
    
    // Toggle menu functionality
    const navMenu = document.querySelector('nav ul');
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        backdrop.classList.toggle('active');
        
        // Prevent body scrolling when menu is open
        document.body.style.overflow = hamburger.classList.contains('active') ? 'hidden' : 'auto';
    });
    
    // Close menu when clicking on links or backdrop
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            backdrop.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
    
    backdrop.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        backdrop.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close menu when window is resized beyond mobile breakpoint
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            backdrop.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Smooth Scroll for Navigation Links
function setupSmoothScroll() {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize All Features
document.addEventListener('DOMContentLoaded', () => {
    // Setup responsive navigation first
    setupResponsiveNavigation();
    
    // Then initialize all other animations
    createCodeRain();
    animateOnScroll();
    parallaxEffect();
    animateTechStack();
    createBinaryBackground();
    setupSmoothScroll();
});