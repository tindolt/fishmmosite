document.querySelector('.cta-button').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: document.querySelector('.features').offsetTop,
    behavior: 'smooth'
  });
});

let currentSlide = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll('.carousel-slide');
  const totalSlides = slides.length;
  currentSlide += step;
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }
  else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }
  const offset = -currentSlide * 100;
  document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;
}

const darkModeButton = document.querySelector('.dark-mode-toggle');

darkModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});