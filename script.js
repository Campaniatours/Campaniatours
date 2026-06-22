const translations = {
    it: {
        heroTitle: "Scopri la Campania con una Guida Locale",
        heroSubtitle: "Tour esclusivi a Pompei, Costiera Amalfitana e Reggia di Caserta.",
        heroBtn: "Prenota un Tour",
        toursTitle: "I Nostri Tour più Richiesti",
        t1Title: "Pompei",
        t1Desc: "Un viaggio nel tempo per rivivere la storia dell'antica città romana sepolta dal Vesuvio.",
        t2Title: "Costiera Amalfitana",
        t2Desc: "Panorami mozzafiato, borghi a picco sul mare e i colori unici di Positano e Amalfi.",
        t3Title: "Reggia di Caserta",
        t3Desc: "L'eleganza della Versailles italiana, tra appartamenti reali e giardini immensi.",
        aboutTitle: "Chi Siamo",
        aboutP: "Siamo guide professioniste abilitate, nate e cresciute in Campania. La nostra missione è farti vivere questa terra non come un semplice turista, ma come un locale, scoprendo segreti, storie e tradizioni autentiche.",
        contactTitle: "Inizia la tua Avventura",
        contactSubtitle: "Hai domande o vuoi personalizzare il tuo itinerario? Contattaci direttamente su WhatsApp per una risposta immediata."
    },
    en: {
        heroTitle: "Discover Campania with a Local Guide",
        heroSubtitle: "Exclusive tours to Pompeii, Amalfi Coast, and the Royal Palace of Caserta.",
        heroBtn: "Book a Tour",
        toursTitle: "Our Most Popular Tours",
        t1Title: "Pompeii",
        t1Desc: "A journey through time to relive the history of the ancient Roman city buried by Vesuvius.",
        t2Title: "Amalfi Coast",
        t2Desc: "Breathtaking views, cliffside villages, and the unique colors of Positano and Amalfi.",
        t3Title: "Royal Palace of Caserta",
        t3Desc: "The elegance of the Italian Versailles, featuring royal apartments and immense gardens.",
        aboutTitle: "About Us",
        aboutP: "We are licensed professional guides, born and raised in Campania. Our mission is to let you experience this land not just as a tourist, but as a local, discovering authentic secrets, stories, and traditions.",
        contactTitle: "Start Your Adventure",
        contactSubtitle: "Have questions or want to customize your itinerary? Contact us directly on WhatsApp for an immediate response."
    },
    es: {
        heroTitle: "Descubre Campania con una Guía Local",
        heroSubtitle: "Tours exclusivos a Pompeya, la Costa Amalfitana y el Palacio Real de Caserta.",
        heroBtn: "Reservar un Tour",
        toursTitle: "Nuestros Tours más Solicitados",
        t1Title: "Pompeya",
        t1Desc: "Un viaje en el tiempo para revivir la historia de la antigua ciudad romana sepultada por el Vesubio.",
        t2Title: "Costa Amalfitana",
        t2Desc: "Vistas impresionantes, pueblos acantilados y los colores únicos de Positano y Amalfi.",
        t3Title: "Palacio Real de Caserta",
        t3Desc: "La elegancia del Versalles italiano, entre apartamentos reales e inmensos jardines.",
        aboutTitle: "Quiénes Somos",
        aboutP: "Somos guías profesionales acreditados, nacidos y criados en Campania. Nuestra misión es hacerte vivir esta tierra no come un simple turista, sino como un local, descubriendo secretos, historias y tradiciones auténticas.",
        contactTitle: "Comienza tu Aventura",
        contactSubtitle: "¿Tienes preguntas o quieres personalizar tu itinerario? Contáctanos directamente in WhatsApp para una respuesta inmediata."
    }
};

function switchLang(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${lang}`).classList.add('active');

    document.getElementById('hero-title').innerText = translations[lang].heroTitle;
    document.getElementById('hero-subtitle').innerText = translations[lang].heroSubtitle;
    document.getElementById('hero-btn').innerText = translations[lang].heroBtn;
    document.getElementById('tours-title').innerText = translations[lang].toursTitle;
    document.getElementById('t1-title').innerText = translations[lang].t1Title;
    document.getElementById('t1-desc').innerText = translations[lang].t1Desc;
    document.getElementById('t2-title').innerText = translations[lang].t2Title;
    document.getElementById('t2-desc').innerText = translations[lang].t2Desc;
    document.getElementById('t3-title').innerText = translations[lang].t3Title;
    document.getElementById('t3-desc').innerText = translations[lang].t3Desc;
    document.getElementById('about-title').innerText = translations[lang].aboutTitle;
    document.getElementById('about-p').innerText = translations[lang].aboutP;
    document.getElementById('contact-title').innerText = translations[lang].contactTitle;
    document.getElementById('contact-subtitle').innerText = translations[lang].contactSubtitle;
}
