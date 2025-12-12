// Firefly JS — Clean Version (No Review System)

// --- Language Toggle ---
const toggleLang = document.getElementById('toggleLang');
let showingAr = false;

toggleLang.addEventListener('click', () => {
  showingAr = !showingAr;

  if (showingAr) {
    document.documentElement.lang = 'ar';
    document.body.classList.add('rtl');

    document.querySelectorAll('.ar').forEach(n => n.style.display = 'block');

    document.getElementById('slogan').textContent = 'مرحبا بكم في فايرفلاي';
    document.getElementById('slogan-sub').textContent =
      'امسح الرمز، اختر اللغة وقيّم تجربتك. الأسعار لا تشمل الضريبة.';
  } else {
    document.documentElement.lang = 'en';
    document.body.classList.remove('rtl');

    document.querySelectorAll('.ar').forEach(n => n.style.display = 'none');

    document.getElementById('slogan').textContent = 'Welcome to Firefly';
    document.getElementById('slogan-sub').textContent =
      'Scan the QR, choose your language, and rate us. Prices exclude tax.';
  }
});

// --- Smooth Scrolling for Navbar ---
document.querySelectorAll('.navbar a').forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const id = a.getAttribute('href').slice(1);
    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// --- Hide Arabic content on load ---
document.querySelectorAll('.ar').forEach(n => n.style.display = 'none');
