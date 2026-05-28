// ========== SMOOTH SCROLL TO SECTION ==========
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// ========== CTA HANDLER ==========
function handleCTA() {
    alert('Thank you for your interest in GitTableHub!\n\nEmail: hello@gittablehub.io\nOr sign up to the waiting list.');
}

// ========== NAVBAR BEHAVIOR ==========
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Add shadow on scroll
    if (scrollTop > 10) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }

    lastScrollTop = scrollTop;
});

// ========== ANIMATE ON SCROLL ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and elements
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.problem-card, .feature-card, .step, .team-card, .pricing-card');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// ========== COUNTER ANIMATION ==========
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ========== PRICING TOGGLE ==========
let isAnnual = false;

function togglePricing() {
    isAnnual = !isAnnual;
    
    const priceElements = document.querySelectorAll('.price');
    const prices = {
        starter: isAnnual ? 'Free' : 'Free',
        professional: isAnnual ? '$990/year' : '$99/mo',
        enterprise: isAnnual ? 'Custom' : 'Custom'
    };
    
    // Update pricing display (optional)
    console.log(`Pricing switched to: ${isAnnual ? 'Annual' : 'Monthly'}`);
}

// ========== FORM HANDLING (if needed) ==========
function handleFormSubmit(event) {
    if (event) {
        event.preventDefault();
    }
    
    const email = document.querySelector('input[type="email"]');
    if (email && email.value) {
        alert(`Thank you! We'll send updates to ${email.value}`);
        email.value = '';
    }
}

// ========== KEYBOARD NAVIGATION ==========
document.addEventListener('keydown', (e) => {
    // Press 'g' to scroll to features
    if (e.key === 'g') {
        scrollToSection('features');
    }
    // Press 't' to scroll to team
    if (e.key === 't') {
        scrollToSection('team');
    }
    // Press 'c' to scroll to contact
    if (e.key === 'c') {
        scrollToSection('contact');
    }
});

// ========== ACTIVE NAV LINK ==========
window.addEventListener('scroll', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    let current = '';

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--primary-color)';
        }
    });
});

// ========== CONSOLE MESSAGE ==========
console.log('%cWelcome to GitTableHub! 📊', 'font-size: 20px; color: #0066cc; font-weight: bold;');
console.log('%cThe intelligent university scheduling platform', 'font-size: 14px; color: #666;');
console.log('%cInterested in joining? Visit our site or reach out to hello@gittablehub.io', 'font-size: 12px; color: #0066cc;');
