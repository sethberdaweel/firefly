// ---------------------------
// Firefly JS (Updated)
// ---------------------------

// Selectors
const toggleLang = document.getElementById('toggleLang');
const nav = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');
let showingAr = false;

// ---------------------------
// Language Toggle
// ---------------------------
toggleLang.addEventListener('click', () => {
  showingAr = !showingAr;

  if (showingAr) {
    document.documentElement.lang = 'ar';
    document.body.classList.add('rtl');

    // Show Arabic labels
    document.querySelectorAll('.ar').forEach(n => n.style.display = 'inline');
    document.querySelectorAll('.en').forEach(n => n.style.display = 'none');

    // Hero text in Arabic
    document.getElementById('slogan').textContent = 'مرحبا بكم في فايرفلاي';
    document.getElementById('slogan-sub').textContent =
      'اختر اللغة وقيّم تجربتك. الأسعار شاملة الضريبة.';
  } else {
    document.documentElement.lang = 'en';
    document.body.classList.remove('rtl');

    // Show English labels
    document.querySelectorAll('.ar').forEach(n => n.style.display = 'none');
    document.querySelectorAll('.en').forEach(n => n.style.display = 'inline');

    // Hero text in English
    document.getElementById('slogan').textContent = 'Welcome to Firefly';
    document.getElementById('slogan-sub').textContent =
      'Choose your language, and rate us. Prices exclude tax.';
  }
});

// Hide Arabic on load
document.querySelectorAll('.ar').forEach(n => n.style.display = 'none');

// ---------------------------
// Mobile Menu Toggle
// ---------------------------
hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// ---------------------------
// Close menu when clicking a nav link
// ---------------------------
document.querySelectorAll('.navbar a').forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const id = a.getAttribute('href').slice(1);

    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });

    nav.classList.remove('open'); // CLOSE MENU
  });
});

// ---------------------------
// Close menu when clicking outside
// ---------------------------
document.addEventListener('click', (e) => {
  if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
    nav.classList.remove('open');
  }
});
