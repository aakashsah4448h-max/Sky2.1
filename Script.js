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
        "Technology Enthusiast",
        "Photographer"
    ];
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 80;

    function handleTyping() {
        if (!textTarget) return;
        const currentTitle = titles[titleIndex];
        
        if (isDeleting) {
            textTarget.textContent = currentTitle.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 30;
        } else {
            textTarget.textContent = currentTitle.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 80;
        }

        if (!isDeleting && charIndex === currentTitle.length) {
            typeSpeed = 1800;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
            typeSpeed = 400;
        }

        setTimeout(handleTyping, typeSpeed);
    }
    setTimeout(handleTyping, 800);

    // 3. Cursor Follower Coordination
    const cursorGlow = document.getElementById('cursorGlow');
    window.addEventListener('mousemove', (e) => {
        if (cursorGlow) {
            cursorGlow.style.left = `${e.clientX}px`;
            cursorGlow.style.top = `${e.clientY}px`;
        }
    });

    // 4. Scroll Progress Calculator
    const loadingBar = document.getElementById('loadingBar');
    window.addEventListener('scroll', () => {
        if (loadingBar) {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            loadingBar.style.width = `${scrolled}%`;
        }
    });

    // 5. Mobile Menu Controller
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileMenu.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileMenu.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            });
        });
    }

    // 6. Scroll Reveal Observer
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const observerOptions = {
        root: null,
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px'
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
});

/* 7. Lightbox Preview Controllers */
function openLightbox(title, description) {
    const lightbox = document.getElementById('lightbox');
    const displayTitle = document.getElementById('lightbox-title-display');
    const displayDesc = document.getElementById('lightbox-desc-display');
    
    if (!lightbox) return;

    if(displayTitle && displayDesc) {
        displayTitle.textContent = title;
        displayDesc.textContent = description;
    }

    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}
