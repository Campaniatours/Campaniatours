// Lingue
let currentLang = 'it';
let currentTourPrice = 0;

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.setLang;
    switchLang(lang);
  });
});

function switchLang(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.classList.remove('active');
  });
  document.querySelectorAll(`[data-lang="${lang}"]`).forEach(el => {
    el.classList.add('active');
  });
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`[data-set-lang="${lang}"]`).classList.add('active');
  document.documentElement.lang = lang;
}

// Menu mobile
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Booking Modal
function openBooking(tourName, price) {
  currentTourPrice = price;
  document.getElementById('modalTourName').textContent = tourName;
  document.getElementById('bookingTotal').textContent = price;
  document.getElementById('bookingModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeBooking() {
  document.getElementById('bookingModal').classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Calcola totale in base alle persone
document.getElementById('bookingPeople').addEventListener('change', (e) => {
  const people = e.target.value === '5+' ? 5 : parseInt(e.target.value);
  document.getElementById('bookingTotal').textContent = currentTourPrice * people;
});

// Submit booking - qui colleghi Stripe/PayPal
document.getElementById('bookingForm').addEventListener('submit', (e) => {
  e.preventDefault();
  
  // DEMO: qui invece dell'alert devi chiamare Stripe
  alert('Per collegare il pagamento reale: 1) Crea account Stripe 2) Sostituisci questo alert con checkout Stripe. Ti spiego come sotto 👇');
  
  // Esempio Stripe Checkout:
  // const stripe = Stripe('pk_test_TUA_CHIAVE');
  // stripe.redirectToCheckout({ sessionId: 'SESSION_ID_DAL_BACKEND' });
});

// Contact form
document.getElementById('contactForm').addEventListener('submit',
