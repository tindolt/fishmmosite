// Smooth Scroll for CTA button
document.querySelector('.cta-button').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: document.querySelector('.features').offsetTop,
    behavior: 'smooth'
  });
});