/* ==========================================
   PREMIUM PORTFOLIO JS: Aakash Kumar Sah
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Dynamic Automatic Copyright Year Tracker
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Typing Animation Framework
    const textTarget = document.getElementById('typing-text');
    const titles = [
        "Teacher",
        "Educational Administrator",
        "Tech Enthusiast",
        "Photographer"
    ];
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function handleTyping() {
        if (!textTarget) return;
        const currentTitle = titles[titleIndex];
        
        if (isDeleting) {
            textTarget.textContent = currentTitle.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 40; // Speed up erasure
        } else {
            textTarget.textContent = currentTitle.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100; // Natural typing pace
        }

        if (!isDeleting && charIndex === currentTitle.length) {
            typeSpeed = 2000; // Linger on complete word
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
            typeSpeed = 500; // Brief pause before next sentence
        }

        setTimeout(handleTyping, typeSpeed);
    }
    setTimeout(handleTyping, 1000);

    // 3. Premium Interactive Background Particle Layer
    const particleContainer = document.getElementById('particle-container');
    const particleCount = 45;
    
    if (particleContainer) {
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = `${Math.random() * 4 + 2}px`;
            particle.style.height = particle.style.width;
            particle.style.backgroundColor = Math.random() > 0.5 ? 'var(--primary)' : 'var(--secondary)';
            particle.style.borderRadius = '50%';
            particle.style.opacity = Math.random() * 0.3 + 0.1;
            
            // Random distribution positioning
            particle.style.top = `${Math.random() * 100}vh`;
            particle.style.left = `${Math.random() * 100}vw`;
            
            // Add custom random floating animations via JS timeline offsets
            particle.animate([
                { transform: 'translate(0, 0)' },
                { transform: `translate(${Math.random() * 60 - 30}px, ${Math.random() * -80 - 40}px)` }
            ], {
                duration: Math.random() * 6000 + 6000,
                iterations: Infinity,
                direction: 'alternate',
                easing: 'ease-in-out'
            });
            
            particleContainer.appendChild(particle);
        }
    }

    // 4. Cursor Follower Mesh Glow Coordination
    const cursorGlow = document.getElementById('cursorGlow');
    window.addEventListener('mousemove', (e) => {
        if (cursorGlow) {
            cursorGlow.style.left = `${e.clientX}px`;
            cursorGlow.style.top = `${e.clientY}px`;
        }
    });

    // 5. Scroll Progress Loading Bar Calculator
    const loadingBar = document.getElementById('loadingBar');
    window.addEventListener('scroll', () => {
        if (loadingBar) {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            loadingBar.style.width = `${scrolled}%`;
        }
    });

    // 6. Mobile View Overlay Toggle Control
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenu.querySelector('i');
            if(icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Auto collapse menu on anchor link engagement
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileMenu.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // 7. Light/Dark High Contrast Theme Shifter
    const themeToggle = document.getElementById('themeToggle');
    const htmlNode = document.documentElement;

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = htmlNode.getAttribute('data-theme');
            const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            htmlNode.setAttribute('data-theme', targetTheme);
            const icon = themeToggle.querySelector('i');
            
            if (targetTheme === 'light') {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        });
    }

    // 8. Elegant Scroll Reveal Intersection Observer Mesh
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Trigger precisely once
            }
        });
    }, observerOptions);

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
});

// 9. Modern Interactive Photography Gallery Modal Controller
function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const displayIcon = document.getElementById('lightbox-icon-display');
    const displayTitle = document.getElementById('lightbox-title-display');
    
    if (!lightbox) return;

    // Extract structure from source element placeholder
    const sourceIcon = element.querySelector('.gallery-placeholder i').className;
    const sourceTitle = element.querySelector('.gallery-placeholder span').textContent;
    
    if(displayIcon && displayTitle) {
        displayIcon.innerHTML = `<i class="${sourceIcon}"></i>`;
        displayTitle.textContent = sourceTitle;
    }

    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Freeze viewport background scroll
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable background scrolling
    }
}