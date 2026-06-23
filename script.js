/* ==========================================================================
   TOGGLE MENU MOBILE
   ========================================================================== */
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    // Apri/chiudi menu mobile
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Cambia icona (se usi emoji o icon font)
            const isOpen = navLinks.classList.contains('active');
            menuBtn.innerHTML = isOpen ? '✕' : '☰';
            menuBtn.setAttribute('aria-expanded', isOpen);
        });
    }

    // Chiudi menu quando si clicca su un link
    navLinksItems.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                if (menuBtn) {
                    menuBtn.innerHTML = '☰';
                    menuBtn.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });

    // Chiudi menu quando si clicca fuori
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            if (menuBtn) {
                menuBtn.innerHTML = '☰';
                menuBtn.setAttribute('aria-expanded', 'false');
            }
        }
    });

    /* ==========================================================================
       NAVBAR SCROLL EFFECT
       ========================================================================== */
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.15)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });

    /* ==========================================================================
       SMOOTH SCROLL PER I LINK DELLA NAVBAR
       ========================================================================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Sottrae l'altezza della navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ==========================================================================
       CAMBIO LINGUA
       ========================================================================== */
    const langBtns = document.querySelectorAll('.lang-btn');
    
    langBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Rimuovi active da tutti
            langBtns.forEach(b => b.classList.remove('active'));
            // Aggiungi active a quello cliccato
            this.classList.add('active');
            
            const lang = this.getAttribute('data-lang') || this.textContent.toLowerCase();
            changeLanguage(lang);
        });
    });

    /* ==========================================================================
       ANIMAZIONI AL SCROLL (Intersection Observer)
       ========================================================================== */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Osserva tutte le card e le sezioni
    document.querySelectorAll('.dest-card, .testi-card, .section-header').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Classe che viene aggiunta quando l'elemento entra in viewport
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    /* ==========================================================================
       FORM CONTATTI
       ========================================================================== */
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Validazione base
            if (!data.name || !data.email || !data.message) {
                showNotification('Per favore compila tutti i campi obbligatori.', 'error');
                return;
            }
            
            if (!isValidEmail(data.email)) {
                showNotification('Per favore inserisci un indirizzo email valido.', 'error');
                return;
            }
            
            // Simula invio (qui puoi aggiungere la chiamata AJAX al tuo backend)
            showNotification('Messaggio inviato con successo! Ti risponderemo presto.', 'success');
            this.reset();
        });
    }

    /* ==========================================================================
       NOTIFICHE (TOAST)
       ========================================================================== */
    function showNotification(message, type = 'info') {
        // Rimuovi notifiche esistenti
        const existing = document.querySelector('.notification');
        if (existing) existing.remove();
        
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <span>${message}</span>
            <button onclick="this.parentElement.remove()">✕</button>
        `;
        
        // Stili inline per la notifica
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 15px 25px;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 9999;
            display: flex;
            align-items: center;
            gap: 15px;
            animation: slideInRight 0.3s ease;
            max-width: 400px;
        `;
        
        if (type === 'success') {
            notification.style.background = '#27ae60';
        } else if (type === 'error') {
            notification.style.background = '#e74c3c';
        } else {
            notification.style.background = '#3498db';
        }
        
        document.body.appendChild(notification);
        
        // Auto-rimuovi dopo 5 secondi
        setTimeout(() => {
            if (notification.parentElement) {
                notification.style.animation = 'slideOutRight 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }

    // Aggiungi animazioni CSS per le notifiche
    const notifStyle = document.createElement('style');
    notifStyle.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        .notification button {
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            font-size: 1rem;
            padding: 0;
            margin-left: 10px;
        }
    `;
    document.head.appendChild(notifStyle);

    /* ==========================================================================
       UTILITIES
       ========================================================================== */
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function changeLanguage(lang) {
        // Qui puoi implementare il cambio lingua reale
        // Per ora mostriamo solo una notifica
        const langNames = {
            'it': 'Italiano',
            'en': 'English',
            'fr': 'Français',
            'de': 'Deutsch'
        };
        showNotification(`Lingua cambiata in: ${langNames[lang] || lang}`, 'info');
        
        // Salva preferenza nel localStorage
        localStorage.setItem('preferred-lang', lang);
    }

    /* ==========================================================================
       CARICA LINGUA PREFERITA
       ========================================================================== */
    const savedLang = localStorage.getItem('preferred-lang');
    if (savedLang) {
        langBtns.forEach(btn => {
            const btnLang = btn.getAttribute('data-lang') || btn.textContent.toLowerCase();
            if (btnLang === savedLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    /* ==========================================================================
       LAZY LOADING IMMAGINI
       ========================================================================== */
    if ('IntersectionObserver' in window) {
        const imgObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imgObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imgObserver.observe(img);
        });
    }

    /* ==========================================================================
       CONTATORE ANIMATO (per statistiche/eventuali)
       ========================================================================== */
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }

    // Esempio: se hai elementi con classe .counter
    const counters = document.querySelectorAll('.counter');
    if (counters.length > 0) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.getAttribute('data-target'));
                    animateCounter(entry.target, target);
                    counterObserver.unobserve(entry.target);
                }
            });
        });
        
        counters.forEach(counter => counterObserver.observe(counter));
    }

    /* ==========================================================================
       BACK TO TOP BUTTON
       ========================================================================== */
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary);
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    /* ==========================================================================
       PRELOADER (opzionale)
       ========================================================================== */
    window.addEventListener('load', () => {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => preloader.remove(), 500);
        }
    });

});
