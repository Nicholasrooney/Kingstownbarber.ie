// Header shadow on scroll
const header = document.querySelector('.site-header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const links = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

// Reveal on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Highlight today's opening hours
const today = document.querySelector(`#hours tr[data-day="${new Date().getDay()}"]`);
if (today) today.classList.add('today');

document.getElementById('year').textContent = new Date().getFullYear();

// Gallery lightbox
const lb = document.getElementById('lightbox');
const lbImg = lb.querySelector('img');
const shots = [...document.querySelectorAll('.gallery button')];
let current = 0;
const show = i => {
  current = (i + shots.length) % shots.length;
  lbImg.src = shots[current].dataset.full;
  lbImg.alt = shots[current].querySelector('img').alt;
};
shots.forEach((b, i) => b.addEventListener('click', () => { show(i); lb.classList.add('open'); }));
const close = () => lb.classList.remove('open');
lb.querySelector('.lb-close').addEventListener('click', close);
lb.querySelector('.lb-prev').addEventListener('click', () => show(current - 1));
lb.querySelector('.lb-next').addEventListener('click', () => show(current + 1));
lb.addEventListener('click', e => { if (e.target === lb) close(); });
document.addEventListener('keydown', e => {
  if (!lb.classList.contains('open')) return;
  if (e.key === 'Escape') close();
  if (e.key === 'ArrowLeft') show(current - 1);
  if (e.key === 'ArrowRight') show(current + 1);
});
