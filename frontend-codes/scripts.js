// Parallax Effect
document.addEventListener('mousemove', (e) => {
  const x = (window.innerWidth - e.pageX) / 50;
  const y = (window.innerHeight - e.pageY) / 50;
  document.querySelector('.hero-slider').style.transform = 
    `translate3d(${x}px, ${y}px, 0)`;
});

// Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slider-item');
const cards = document.querySelectorAll('.success-card');
const titles = document.querySelectorAll('.hero-title, .hero-description');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  
  // Animate content
  titles.forEach(title => title.classList.remove('visible'));
  cards.forEach(card => card.classList.remove('visible'));
  
  setTimeout(() => {
    titles.forEach(title => title.classList.add('visible'));
    cards.forEach(card => card.classList.add('visible'));
  }, 300);
}

// Auto-advance and controls
let autoSlide = setInterval(() => nextSlide(), 5000);

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

document.querySelector('.next').addEventListener('click', () => {
  clearInterval(autoSlide);
  nextSlide();
  autoSlide = setInterval(() => nextSlide(), 5000);
});

document.querySelector('.prev').addEventListener('click', () => {
  clearInterval(autoSlide);
  prevSlide();
  autoSlide = setInterval(() => nextSlide(), 5000);
});

// Initial animation
window.addEventListener('load', () => {
  document.querySelector('.hero-title').classList.add('visible');
  document.querySelector('.hero-description').classList.add('visible');
  document.querySelectorAll('.success-card').forEach(card => 
    card.classList.add('visible'));
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'ArrowRight') nextSlide();
});
