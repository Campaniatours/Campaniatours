const data = {
  en: {
    heroTitle: "Experience the Magic of Campania",
    heroDesc: "Exclusive guided tours to Pompeii, Amalfi Coast, Capri, and hidden trails with local experts.",
    heroBtn: "Explore Experiences",
    toursHeading: "Our Top Experiences",
    t1Title: "History & Archaeology",
    t1Desc: "Walk through ancient history. Discover Pompeii, Herculaneum, and Mount Vesuvius with official guides.",
    t2Title: "Coast & Islands",
    t2Desc: "Discover the breathtaking views of Positano, Amalfi, and the crystal-clear waters of Capri.",
    t3Title: "Nature & Hiking",
    t3Desc: "Trek the famous Path of the Gods and explore the wild, authentic beauty of Cilento.",
    contactTitle: "Plan Your Custom Tour",
    contactDesc: "Let an expert local guide tailor the perfect itinerary for your holiday.",
    whatsappBtn: "Chat on WhatsApp"
  },
  it: {
    heroTitle: "Vivi la Magia della Campania",
    heroDesc: "Tour guidati esclusivi per Pompei, Costiera Amalfitana, Capri e sentieri nascosti con esperti locali.",
    heroBtn: "Esplora le Esperienze",
    toursHeading: "Le Nostre Migliori Esperienze",
    t1Title: "Storia & Archeologia",
    t1Desc: "Cammina nella storia antica. Scopri Pompei, Ercolano e il Vesuvio con guide ufficiali.",
    t2Title: "Costiera & Isole",
    t2Desc: "Scopri i panorami mozzafiato di Positano, Amalfi e le acque cristalline dell'isola di Capri.",
    t3Title: "Natura & Trekking",
    t3Desc: "Percorri il famoso Sentiero degli Dei ed esplora la bellezza selvaggia e autentica del Cilento.",
    contactTitle: "Pianifica il tuo Tour Su Misura",
    contactDesc: "Lascia che una guida locale esperta crei l'itinerario perfetto per la tua vacanza.",
    whatsappBtn: "Chatta su WhatsApp"
  },
  es: {
    heroTitle: "Vive la Magia de Campania",
    heroDesc: "Tours guiados exclusivos a Pompeya, la Costa Amalfitana, Capri y senderos ocultos con expertos locales.",
    heroBtn: "Explorar Experiencias",
    toursHeading: "Nuestras Mejores Experiencias",
    t1Title: "Historia y Arqueología",
    t1Desc: "Camina por la historia antigua. Descubre Pompeya, Herculano y el Vesubio con guías oficiales.",
    t2Title: "Costa e Islas",
    t2Desc: "Descubre las vistas impresionantes de Positano, Amalfi y las aguas cristalinas de la isla de Capri.",
    t3Title: "Naturaleza y Senderismo",
    t3Desc: "Recorre el famoso Sendero de los Dioses y explora la belleza salvaje y auténtica del Cilento.",
    contactTitle: "Planifica tu Tour Personalizado",
    contactDesc: "Deja que un guía local experto diseñe el itinerario perfecto para tus vacaciones.",
    whatsappBtn: "Chatear por WhatsApp"
  }
};

function changeLang(lang) {
  // Aggiorna i testi
  document.getElementById('hero-title').textContent = data[lang].heroTitle;
  document.getElementById('hero-desc').textContent = data[lang].heroDesc;
  document.getElementById('hero-btn').textContent = data[lang].heroBtn;
  document.getElementById('tours-heading').textContent = data[lang].toursHeading;
  document.getElementById('t1-title').textContent = data[lang].t1Title;
  document.getElementById('t1-desc').textContent = data[lang].t1Desc;
  document.getElementById('t2-title').textContent = data[lang].t2Title;
  document.getElementById('t2-desc').textContent = data[lang].t2Desc;
  document.getElementById('t3-title').textContent = data[lang].t3Title;
  document.getElementById('t3-desc').textContent = data[lang].t3Desc;
  document.getElementById('contact-title').textContent = data[lang].contactTitle;
  document.getElementById('contact-desc').textContent = data[lang].contactDesc;
  document.getElementById('whatsapp-btn').textContent = data[lang].whatsappBtn;

  // Gestione classe attiva sui bottoni
  document.querySelectorAll('.lang-selector button').forEach(btn => btn.classList.remove('active'));
  document.getElementById('btn-' + lang).classList.add('active');
}
