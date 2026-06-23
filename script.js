
# File 3: script.js
js_content = '''/* ==========================================================================
   CAMPANIA TOURS - SCRIPT.JS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function() {

    /* ----------------------------------------------------------------------
       TRANSLATIONS
       ---------------------------------------------------------------------- */
    const translations = {
        en: {
            'nav.home': 'Home',
            'nav.tours': 'Tours',
            'nav.testimonials': 'Testimonials',
            'nav.contact': 'Contact',
            'hero.badge': 'Authentic Experiences',
            'hero.title': 'Discover the Real <span>Campania</span>',
            'hero.subtitle': 'Breathtaking trails, ancient ruins, authentic flavors, and unforgettable moments in the heart of Southern Italy',
            'hero.cta1': 'Explore Tours',
            'hero.cta2': 'Book Now',
            'tours.tag': 'Our Tours',
            'tours.title': 'Unforgettable Experiences',
            'tours.subtitle': 'Choose your adventure and let us guide you through the wonders of Campania',
            'badges.popular': 'Most Popular',
            'badges.history': 'History',
            'badges.gastronomy': 'Gastronomy',
            'badges.experience': 'Experience',
            'badges.wine': 'Wine',
            'tour1.title': 'Breathtaking Trails',
            'tour1.desc': 'Walk the Path of the Gods and explore hidden trails with panoramic views of the Amalfi Coast and the Gulf of Naples.',
            'tour1.price': 'From €75',
            'tour2.title': 'Pompeii & Vesuvius',
            'tour2.desc': 'Step back in time exploring the ancient ruins of Pompeii, then conquer the crater of Mount Vesuvius for a stunning view.',
            'tour2.price': 'From €95',
            'tour3.title': 'Food Tour',
            'tour3.desc': 'Taste the real Campania: fresh mozzarella, local cheeses, cured meats, and traditional dishes in authentic local spots.',
            'tour3.price': 'From €85',
            'tour4.title': 'Pizza Experience',
            'tour4.desc': 'Learn the secrets of real Neapolitan pizza from a master pizzaiolo. Knead, top, and bake your own pizza in a wood-fired oven.',
            'tour4.price': 'From €70',
            'tour5.title': 'Wine Tasting',
            'tour5.desc': 'Visit local vineyards on the slopes of Vesuvius. Taste Lacryma Christi and other regional wines paired with local specialties.',
            'tour5.price': 'From €90',
            'testimonials.tag': 'What They Say',
            'testimonials.title': 'Traveler Reviews',
            'testimonials.subtitle': 'Authentic experiences shared by those who discovered Campania with us',
            'review1.text': 'The Path of the Gods hike was absolutely stunning! Our guide was knowledgeable and showed us hidden viewpoints we never would have found alone. A must-do!',
            'review1.from': 'London, UK',
            'review2.text': 'Pompeii and Vesuvius in one day was intense but incredible. The guide brought the ruins to life with fascinating stories. The view from the crater is unforgettable!',
            'review2.from': 'New York, USA',
            'review3.text': 'The pizza making class was the highlight of our trip! We learned so much and ate the best pizza of our lives. Our kids loved every minute of it.',
            'review3.from': 'Madrid, Spain',
            'cta.title': 'Ready for Your Adventure?',
            'cta.subtitle': 'Book now and get 10% off your first Campania tour experience',
            'cta.button': 'Book Your Tour',
            'contact.tag': 'Contact Us',
            'contact.title': 'Book Your Tour',
            'contact.subtitle': 'Fill out the form and we will reply within 24 hours with a personalized quote',
            'contact.infoTitle': 'Contact Information',
            'contact.infoText': 'We are here to organize your perfect tour. Contact us by phone, email, or by filling out the form.',
            'contact.addressLabel': 'Address',
            'contact.phoneLabel': 'Phone',
            'contact.emailLabel': 'Email',
            'contact.hoursLabel': 'Hours',
            'contact.hoursValue': 'Mon-Sat: 9:00 AM - 7:00 PM',
            'form.name': 'Full Name *',
            'form.email': 'Email *',
            'form.phone': 'Phone',
            'form.tour': 'Tour of Interest',
            'form.selectTour': 'Select a tour...',
            'form.customTour': 'Custom Tour',
            'form.date': 'Preferred Date',
            'form.message': 'Message *',
            'form.submit': 'Send Request',
            'footer.about': 'Authentic Campania experiences since 2010. Guided by local professionals who love their land.',
            'footer.popular': 'Popular Tours',
            'footer.useful': 'Useful Links',
            'footer.aboutUs': 'About Us',
            'footer.howToBook': 'How to Book',
            'footer.terms': 'Terms & Conditions',
            'footer.privacy': 'Privacy Policy',
            'footer.faq': 'FAQ',
            'footer.newsletter': 'Newsletter',
            'footer.newsletterText': 'Subscribe to receive exclusive offers and news about our tours.',
            'footer.emailPlaceholder': 'your@email.com',
            'footer.subscribe': 'Subscribe',
            'footer.rights': 'All rights reserved.'
        },
        it: {
            'nav.home': 'Home',
            'nav.tours': 'Tour',
            'nav.testimonials': 'Testimonianze',
            'nav.contact': 'Contatti',
            'hero.badge': 'Esperienze Autentiche',
            'hero.title': 'Scopri la Vera <span>Campania</span>',
            'hero.subtitle': 'Sentieri mozzafiato, rovine antiche, sapori autentici e momenti indimenticabili nel cuore del Sud Italia',
            'hero.cta1': 'Esplora i Tour',
            'hero.cta2': 'Prenota Ora',
            'tours.tag': 'I Nostri Tour',
            'tours.title': 'Esperienze Indimenticabili',
            'tours.subtitle': 'Scegli la tua avventura e lasciati guidare tra le meraviglie della Campania',
            'badges.popular': 'Più Prenotato',
            'badges.history': 'Storia',
            'badges.gastronomy': 'Gastronomia',
            'badges.experience': 'Esperienza',
            'badges.wine': 'Vino',
            'tour1.title': 'Sentieri Mozzafiato',
            'tour1.desc': 'Percorri il Sentiero degli Dei ed esplora sentieri nascosti con viste panoramiche sulla Costiera Amalfitana e sul Golfo di Napoli.',
            'tour1.price': 'Da €75',
            'tour2.title': 'Pompei e Vesuvio',
            'tour2.desc': 'Torna indietro nel tempo esplorando le antiche rovine di Pompei, poi conquista il cratere del Vesuvio per una vista mozzafiato.',
            'tour2.price': 'Da €95',
            'tour3.title': 'Food Tour',
            'tour3.desc': 'Assaggia la vera Campania: mozzarella fresca, formaggi locali, salumi e piatti tradizionali in posti autentici.',
            'tour3.price': 'Da €85',
            'tour4.title': 'Pizza Experience',
            'tour4.desc': 'Impara i segreti della vera pizza napoletana da un maestro pizzaiolo. Impasta, condisci e cuoci la tua pizza nel forno a legna.',
            'tour4.price': 'Da €70',
            'tour5.title': 'Degustazione Vini',
            'tour5.desc': 'Visita le cantine locali sulle pendici del Vesuvio. Assaggia il Lacryma Christi e altri vini regionali abbinati a specialità locali.',
            'tour5.price': 'Da €90',
            'testimonials.tag': 'Cosa Dicono',
            'testimonials.title': 'Recensioni dei Viaggiatori',
            'testimonials.subtitle': 'Esperienze autentiche raccontate da chi ha scoperto la Campania con noi',
            'review1.text': 'Il trekking sul Sentiero degli Dei è stato assolutamente mozzafiato! La nostra guida era preparatissima e ci ha mostrato punti panoramici nascosti che non avremmo mai trovato da soli. Da fare assolutamente!',
            'review1.from': 'Londra, UK',
            'review2.text': 'Pompei e Vesuvio in un giorno è stato intenso ma incredibile. La guida ha fatto rivivere le rovine con storie affascinanti. La vista dal cratere è indimenticabile!',
            'review2.from': 'New York, USA',
            'review3.text': 'Il corso di pizza è stato il momento clou del nostro viaggio! Abbiamo imparato tantissimo e mangiato la migliore pizza della nostra vita. I nostri bambini hanno adorato ogni minuto.',
            'review3.from': 'Madrid, Spagna',
            'cta.title': 'Pronto per la Tua Avventura?',
            'cta.subtitle': 'Prenota ora e ricevi uno sconto del 10% sulla tua prima esperienza in Campania',
            'cta.button': 'Prenota il Tuo Tour',
            'contact.tag': 'Contattaci',
            'contact.title': 'Prenota il Tuo Tour',
            'contact.subtitle': 'Compila il modulo e ti risponderemo entro 24 ore con un preventivo personalizzato',
            'contact.infoTitle': 'Informazioni di Contatto',
            'contact.infoText': 'Siamo qui per organizzare il tuo tour perfetto. Contattaci per telefono, email o compilando il modulo.',
            'contact.addressLabel': 'Indirizzo',
            'contact.phoneLabel': 'Telefono',
            'contact.emailLabel': 'Email',
            'contact.hoursLabel': 'Orari',
            'contact.hoursValue': 'Lun-Sab: 9:00 - 19:00',
            'form.name': 'Nome e Cognome *',
            'form.email': 'Email *',
            'form.phone': 'Telefono',
            'form.tour': 'Tour di Interesse',
            'form.selectTour': 'Seleziona un tour...',
            'form.customTour': 'Tour Personalizzato',
            'form.date': 'Data Preferita',
            'form.message': 'Messaggio *',
            'form.submit': 'Invia Richiesta',
            'footer.about': 'Esperienze autentiche in Campania dal 2010. Guidate da professionisti del territorio che amano la loro terra.',
            'footer.popular': 'Tour Popolari',
            'footer.useful': 'Link Utili',
            'footer.aboutUs': 'Chi Siamo',
            'footer.howToBook': 'Come Prenotare',
            'footer.terms': 'Termini e Condizioni',
            'footer.privacy': 'Privacy Policy',
            'footer.faq': 'FAQ',
            'footer.newsletter': 'Newsletter',
            'footer.newsletterText': 'Iscriviti per ricevere offerte esclusive e novità sui nostri tour.',
            'footer.emailPlaceholder': 'tua@email.it',
            'footer.subscribe': 'Iscriviti',
            'footer.rights': 'Tutti i diritti riservati.'
        },
        es: {
            'nav.home': 'Inicio',
            'nav.tours': 'Tours',
            'nav.testimonials': 'Opiniones',
            'nav.contact': 'Contacto',
            'hero.badge': 'Experiencias Auténticas',
            'hero.title': 'Descubre la Verdadera <span>Campania</span>',
            'hero.subtitle': 'Senderos impresionantes, ruinas antiguas, sabores auténticos y momentos inolvidables en el corazón del sur de Italia',
            'hero.cta1': 'Explora los Tours',
            'hero.cta2': 'Reserva Ahora',
            'tours.tag': 'Nuestros Tours',
            'tours.title': 'Experiencias Inolvidables',
            'tours.subtitle': 'Elige tu aventura y déjanos guiarte por las maravillas de Campania',
            'badges.popular': 'Más Reservado',
            'badges.history': 'Historia',
            'badges.gastronomy': 'Gastronomía',
            'badges.experience': 'Experiencia',
            'badges.wine': 'Vino',
            'tour1.title': 'Senderos Impresionantes',
            'tour1.desc': 'Recorre el Camino de los Dioses y explora senderos ocultos con vistas panorámicas de la Costa Amalfitana y el Golfo de Nápoles.',
            'tour1.price': 'Desde €75',
            'tour2.title': 'Pompeya y Vesubio',
            'tour2.desc': 'Viaja en el tiempo explorando las antiguas ruinas de Pompeya, luego conquista el cráter del Vesubio para una vista espectacular.',
            'tour2.price': 'Desde €95',
            'tour3.title': 'Tour Gastronómico',
            'tour3.desc': 'Saborea la verdadera Campania: mozzarella fresca, quesos locales, embutidos y platos tradicionales en lugares auténticos.',
            'tour3.price': 'Desde €85',
            'tour4.title': 'Experiencia Pizza',
            'tour4.desc': 'Aprende los secretos de la verdadera pizza napolitana de un maestro pizzaiolo. Amasa, condimenta y hornea tu propia pizza en horno de leña.',
            'tour4.price': 'Desde €70',
            'tour5.title': 'Cata de Vinos',
            'tour5.desc': 'Visita viñedos locales en las laderas del Vesubio. Degusta Lacryma Christi y otros vinos regionales acompañados de especialidades locales.',
            'tour5.price': 'Desde €90',
            'testimonials.tag': 'Qué Dicen',
            'testimonials.title': 'Opiniones de Viajeros',
            'testimonials.subtitle': 'Experiencias auténticas compartidas por quienes descubrieron Campania con nosotros',
            'review1.text': '¡La caminata por el Camino de los Dioses fue absolutamente impresionante! Nuestro guía era muy conocedor y nos mostró miradores ocultos que nunca habríamos encontrado solos. ¡Imprescindible!',
            'review1.from': 'Londres, Reino Unido',
            'review2.text': 'Pompeya y el Vesubio en un día fue intenso pero increíble. El guía dio vida a las ruinas con historias fascinantes. ¡La vista desde el cráter es inolvidable!',
            'review2.from': 'Nueva York, EE.UU.',
            'review3.text': '¡La clase de pizza fue lo mejor de nuestro viaje! Aprendimos muchísimo y comimos la mejor pizza de nuestras vidas. A nuestros hijos les encantó cada minuto.',
            'review3.from': 'Madrid, España',
            'cta.title': '¿Listo para Tu Aventura?',
            'cta.subtitle': 'Reserva ahora y obtén un 10% de descuento en tu primera experiencia en Campania',
            'cta.button': 'Reserva Tu Tour',
            'contact.tag': 'Contáctanos',
            'contact.title': 'Reserva Tu Tour',
            'contact.subtitle': 'Completa el formulario y te responderemos en 24 horas con un presupuesto personalizado',
            'contact.infoTitle': 'Información de Contacto',
            'contact.infoText': 'Estamos aquí para organizar tu tour perfecto. Contáctanos por teléfono, email o completando el formulario.',
            'contact.addressLabel': 'Dirección',
            'contact.phoneLabel': 'Teléfono',
            'contact.emailLabel': 'Email',
            'contact.hoursLabel': 'Horario',
            'contact.hoursValue': 'Lun-Sáb: 9:00 - 19:00',
            'form.name': 'Nombre Completo *',
            'form.email': 'Email *',
            'form.phone': 'Teléfono',
            'form.tour': 'Tour de Interés',
            'form.selectTour': 'Selecciona un tour...',
            'form.customTour': 'Tour Personalizado',
            'form.date': 'Fecha Preferida',
            'form.message': 'Mensaje *',
            'form.submit': 'Enviar Solicitud',
            'footer.about': 'Experiencias auténticas en Campania desde 2010. Guiadas por profesionales locales que aman su tierra.',
            'footer.popular': 'Tours Populares',
            'footer.useful': 'Enlaces Útiles',
            'footer.aboutUs': 'Sobre Nosotros',
            'footer.howToBook': 'Cómo Reservar',
            'footer.terms': 'Términos y Condiciones',
            'footer.privacy': 'Política de Privacidad',
            'footer.faq': 'Preguntas Frecuentes',
            'footer.newsletter': 'Newsletter',
            'footer.newsletterText': 'Suscríbete para recibir ofertas exclusivas y novedades sobre nuestros tours.',
            'footer.emailPlaceholder': 'tu@email.com',
            'footer.subscribe': 'Suscribirse',
            'footer.rights': 'Todos los derechos reservados.'
        }
    };

    let currentLang = localStorage.getItem('campania-lang') || 'en';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('campania-lang', lang);
        document.documentElement.lang = lang;

        // Update lang buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Update all translatable elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.dataset.i18nPlaceholder;
            if (translations[lang] && translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });
    }

    // Initialize language
    setLanguage(currentLang);

    // Language buttons click
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            setLanguage(this.dataset.lang);
        });
    });

    /* ----------------------------------------------------------------------
       MOBILE MENU
       ---------------------------------------------------------------------- */
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            const isOpen = navLinks.classList.contains('active');
            menuBtn.innerHTML = isOpen ? '✕' : '☰';
            menuBtn.setAttribute('aria-expanded', isOpen);
        });
    }

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

    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar') && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            if (menuBtn) {
                menuBtn.innerHTML = '☰';
                menuBtn.setAttribute('aria-expanded', 'false');
            }
        }
    });

    /* ----------------------------------------------------------------------
       NAVBAR SCROLL EFFECT
       ---------------------------------------------------------------------- */
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

    /* ----------------------------------------------------------------------
       SMOOTH SCROLL
       ---------------------------------------------------------------------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* ----------------------------------------------------------------------
       PRELOADER
       ---------------------------------------------------------------------- */
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            setTimeout(() => {
                preloader.classList.add('hidden');
            }, 500);
        }
    });

    /* ----------------------------------------------------------------------
       SCROLL ANIMATIONS
       ---------------------------------------------------------------------- */
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.dest-card, .testi-card, .section-header').forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    /* ----------------------------------------------------------------------
       CONTACT FORM
       ---------------------------------------------------------------------- */
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            const messages = {
                en: {
                    fillAll: 'Please fill in all required fields.',
                    invalidEmail: 'Please enter a valid email address.',
                    success: 'Message sent successfully! We will reply soon.',
                    error: 'Something went wrong. Please try again.'
                },
                it: {
                    fillAll: 'Per favore compila tutti i campi obbligatori.',
                    invalidEmail: 'Per favore inserisci un indirizzo email valido.',
                    success: 'Messaggio inviato con successo! Ti risponderemo presto.',
                    error: 'Qualcosa è andato storto. Riprova più tardi.'
                },
                es: {
                    fillAll: 'Por favor completa todos los campos obligatorios.',
                    invalidEmail: 'Por favor introduce una dirección de email válida.',
                    success: '¡Mensaje enviado con éxito! Te responderemos pronto.',
                    error: 'Algo salió mal. Por favor inténtalo de nuevo.'
                }
            };

            const msg = messages[currentLang] || messages.en;

            if (!data.name || !data.email || !data.message) {
                showNotification(msg.fillAll, 'error');
                return;
            }

            if (!isValidEmail(data.email)) {
                showNotification(msg.invalidEmail, 'error');
                return;
            }

            // Simulate send (replace with real AJAX call)
            showNotification(msg.success, 'success');
            this.reset();
        });
    }

    /* ----------------------------------------------------------------------
       NOTIFICATIONS
       ---------------------------------------------------------------------- */
    function showNotification(message, type) {
        const existing = document.querySelector('.notification');
        if (existing) existing.remove();

        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <span>${message}</span>
            <button onclick="this.parentElement.remove()">✕</button>
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            if (notification.parentElement) {
                notification.style.animation = 'slideOutRight 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    /* ----------------------------------------------------------------------
       BACK TO TOP
       ---------------------------------------------------------------------- */
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.className = 'back-to-top';
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    /* ----------------------------------------------------------------------
       NEWSLETTER FORM
       ---------------------------------------------------------------------- */
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email && isValidEmail(email)) {
                const successMsg = {
                    en: 'Subscribed successfully!',
                    it: 'Iscrizione completata!',
                    es: '¡Suscripción completada!'
                };
                showNotification(successMsg[currentLang] || successMsg.en, 'success');
                this.reset();
            } else {
                const errorMsg = {
                    en: 'Please enter a valid email.',
                    it: 'Per favore inserisci un email valida.',
                    es: 'Por favor introduce un email válido.'
                };
                showNotification(errorMsg[currentLang] || errorMsg.en, 'error');
            }
        });
    }

});'''

with open('/mnt/agents/output/script.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("✅ script.js creato!")
print(f"Lunghezza: {len(js_content)} caratteri")
