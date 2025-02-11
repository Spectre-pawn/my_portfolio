
        // Code Rain Animation
        function createCodeRain() {
            const codeRainContainer = document.querySelector('.code-rain');
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
        function createBinaryBackground() {
        const container = document.getElementById('binaryContainer');
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
    
        // Initialize Animations
        document.addEventListener('DOMContentLoaded', () => {
            createCodeRain();
            animateOnScroll();
            parallaxEffect();
            animateTechStack();
            createBinaryBackground();
            // Smooth Scroll for Navigation
            document.querySelectorAll('nav a').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    document.querySelector(targetId).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
        });