function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

if (window.innerWidth > 768) {
  document.querySelectorAll('.nav-links li, .menu-links li, .logo, .footer-nav-links li').forEach(item => {
    item.addEventListener('mousemove', (e) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const moveX = Math.min(Math.max(x / 2, -25), 25);
      const moveY = Math.min(Math.max(y / 2, -25), 25);
      item.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'translate(0, 0)';
    });
    // Dokunma olaylarını engelle
    item.addEventListener('touchstart', (e) => e.preventDefault(), { passive: false });
    item.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });
  });
}

window.addEventListener('resize', () => {
  if (window.innerWidth <= 768) {
    document.querySelectorAll('.nav-links li, .menu-links li, .logo, .footer-nav-links li').forEach(item => {
      item.style.transform = 'translate(0, 0)';
    });
  }
});

/* Mevcut kodların altına ekle */
const appNames = ["Smokeless", "Frequency Therapy", "Vocabulario", "Vapeless", "DaysToGo "];
const appNameElement = document.getElementById("app-name");
let index = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = appNames[index];
  
  // Genişliği kelime uzunluğuna göre ayarla (her harf için 1ch)
  const textLength = currentText.length;
  appNameElement.style.maxWidth = `${textLength}ch`; // Dinamik genişlik
  
  appNameElement.style.animation = "none";
  appNameElement.textContent = currentText;

  if (!isDeleting) {
    appNameElement.style.animation = "typing 1s steps(20, end) forwards";
    setTimeout(() => {
      isDeleting = true;
      typeEffect();
    }, 2000);
  } else {
    appNameElement.style.animation = "deleting 0.5s steps(20, end) forwards";
    setTimeout(() => {
      isDeleting = false;
      index = (index + 1) % appNames.length;
      typeEffect();
    }, 500);
  }
}

typeEffect();