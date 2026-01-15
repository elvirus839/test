// Mobile menu toggle - declare early for use in other functions
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navMenu.classList.remove('active');
        }
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger menu
    const spans = menuToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(10px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Animated counter for stats
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current).toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            const statLabel = element.parentElement.querySelector('.stat-label');
            const suffix = statLabel.textContent.includes('%') ? '' : '+';
            element.textContent = target.toLocaleString() + suffix;
        }
    };

    updateCounter();
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Animate stats when visible
            if (entry.target.classList.contains('stats')) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    if (!stat.classList.contains('animated')) {
                        animateCounter(stat);
                        stat.classList.add('animated');
                    }
                });
            }
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe sections for scroll animations
const sections = document.querySelectorAll('.features, .stats, .testimonials, .cta');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
});

// Observe feature cards individually
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                cardObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    cardObserver.observe(card);
});

// Form submission handler
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('.email-input').value;
    
    // Show success message
    const submitBtn = e.target.querySelector('.btn-primary');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '✓ Success!';
    submitBtn.style.background = '#10b981';
    
    // Reset after 3 seconds
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
        e.target.reset();
    }, 3000);
    
    console.log('Form submitted with email:', email);
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add cursor trail effect on hero section
const hero = document.querySelector('.hero');
let particles = [];

// Constants for particle movement
const PARTICLE_MOVEMENT_RANGE = 40;
const PARTICLE_MOVEMENT_OFFSET = 20;

hero.addEventListener('mousemove', (e) => {
    // Limit particle creation
    if (Math.random() > 0.9) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 5px;
            height: 5px;
            background: rgba(255, 255, 255, 0.6);
            border-radius: 50%;
            pointer-events: none;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            animation: particleFade 1s ease-out forwards;
        `;
        
        document.body.appendChild(particle);
        particles.push(particle);
        
        setTimeout(() => {
            particle.remove();
            particles = particles.filter(p => p !== particle);
        }, 1000);
    }
});

// Add particle animation keyframes
const style = document.createElement('style');
const randomX = Math.random() * PARTICLE_MOVEMENT_RANGE - PARTICLE_MOVEMENT_OFFSET;
const randomY = Math.random() * PARTICLE_MOVEMENT_RANGE - PARTICLE_MOVEMENT_OFFSET;
style.textContent = `
    @keyframes particleFade {
        from {
            opacity: 1;
            transform: translate(0, 0) scale(1);
        }
        to {
            opacity: 0;
            transform: translate(${randomX}px, ${randomY}px) scale(0);
        }
    }
`;
document.head.appendChild(style);

console.log('🚀 InnovateTech Landing Page Loaded Successfully!');
