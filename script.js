// Navbar: fondo al hacer scroll
const nav = document.getElementById('nav');

const onScroll = () => {
  nav.classList.toggle('scrolled', window.scrollY > 24);
};

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Animaciones de aparición al hacer scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
