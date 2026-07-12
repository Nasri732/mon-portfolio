// =============================================
// INITIALISATION
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio chargé avec succès! 🚀');
    
    // Initialiser les fonctionnalités
    initScrollAnimations();
    initNavigation();
    initContactForm();
    initTouchEffects();
});

// =============================================
// ANIMATIONS AU DÉFILEMENT
// =============================================

function initScrollAnimations() {
    // Observer pour les animations au défilement
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observer tous les éléments avec classe 'fade-in'
    const elements = document.querySelectorAll('.card, .skill-card, .project-card, .blog-card, .stat-card');
    elements.forEach(el => {
        observer.observe(el);
    });

    // Parallax effect sur le hero
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            heroSection.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
        });
    }
}

// =============================================
// NAVIGATION
// =============================================

function initNavigation() {
    // Active link on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Fermer le menu mobile après le clic
    const navbarToggle = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggle.click();
            }
        });
    });
}

// =============================================
// FORMULAIRE DE CONTACT
// =============================================

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Récupérer les valeurs
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Validation basique
            if (!name || !email || !subject || !message) {
                showNotification('Veuillez remplir tous les champs!', 'danger');
                return;
            }

            // Validation email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Veuillez entrer une adresse email valide!', 'danger');
                return;
            }

            // Simuler l'envoi du formulaire
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi...';
            submitBtn.disabled = true;

            // Simuler un délai d'envoi
            setTimeout(() => {
                // Afficher un message de succès
                showNotification('Message envoyé avec succès! 🎉', 'success');

                // Réinitialiser le formulaire
                contactForm.reset();

                // Restaurer le bouton
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;

                console.log('Message envoyé:', { name, email, subject, message });
            }, 1500);
        });
    }
}

// =============================================
// NOTIFICATIONS
// =============================================

function showNotification(message, type = 'info') {
    // Créer l'élément de notification
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} position-fixed`;
    notification.style.cssText = `
        top: 20px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        animation: slideInLeft 0.5s ease forwards;
    `;
    notification.innerHTML = `
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        ${message}
    `;

    // Ajouter à la page
    document.body.appendChild(notification);

    // Bootstrap alert
    const alert = new bootstrap.Alert(notification);

    // Supprimer après 5 secondes
    setTimeout(() => {
        alert.close();
    }, 5000);
}

// =============================================
// EFFETS TACTILES
// =============================================

function initTouchEffects() {
    // Ripple effect sur les boutons et cartes
    const interactiveElements = document.querySelectorAll('button, .card, .skill-card, .project-card');

    interactiveElements.forEach(element => {
        element.addEventListener('click', function(e) {
            // Créer l'effet ripple
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: rgba(255, 255, 255, 0.5);
                border-radius: 50%;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
                animation: ripple 0.6s ease-out;
            `;

            if (this.style.position === 'static') {
                this.style.position = 'relative';
            }

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// =============================================
// ANIMATIONS CSS PERSONNALISÉES
// =============================================

// Ajouter l'animation ripple au CSS dynamiquement
const style = document.createElement('style');
style.innerHTML = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);

// =============================================
// COMPTEUR STATISTIQUES
// =============================================

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
}

// Observer pour déclencher les compteurs
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const statCards = entry.target.querySelectorAll('.display-6');
            statCards.forEach(card => {
                const numbers = card.textContent.match(/\d+/);
                if (numbers) {
                    animateCounter(card, parseInt(numbers[0]));
                }
            });
            entry.target.classList.add('animated');
        }
    });
});

const aboutSection = document.getElementById('about');
if (aboutSection) {
    const statsContainer = aboutSection.querySelector('.row');
    if (statsContainer) {
        statsObserver.observe(statsContainer);
    }
}

// =============================================
// MODE SOMBRE/CLAIR (OPTIONNEL)
// =============================================

function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    
    // Charger le thème sauvegardé
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);

            // Mettre à jour l'icône
            if (newTheme === 'dark') {
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            }
        });
    }
}

// =============================================
// SMOOTH SCROLL POLYFILL
// =============================================

if (!window.CSS || !window.CSS.supports('scroll-behavior: smooth')) {
    document.documentElement.style.scrollBehavior = 'auto';
}

// =============================================
// OPTIMISATION PERFORMANCE
// =============================================

// Lazy loading images (optionnel)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// =============================================
// CONSOLE MESSAGE
// =============================================

console.log('%c🚀 Bienvenue sur Mon Portfolio!', 'color: #28a745; font-size: 20px; font-weight: bold;');
console.log('%c💡 Pour personnaliser votre portfolio, modifiez les fichiers HTML, CSS et JS', 'color: #17a2b8; font-size: 14px;');
console.log('%c📧 N\'oubliez pas de mettre à jour vos coordonnées de contact!', 'color: #ffc107; font-size: 14px;');