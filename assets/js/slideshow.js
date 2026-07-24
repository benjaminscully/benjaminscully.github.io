(function() {
    const slides = document.querySelectorAll('.slide');
    const caption = document.querySelector('.slide-caption');
    const dotsContainer = document.querySelector('.slide-dots');
    let current = 0;


    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.classList.add('slide-dot');
      dot.setAttribute('aria-label', 'Go to photo ' + (i + 1));
      dot.addEventListener('click', () => showSlide(i));
      dotsContainer.appendChild(dot);
    });
    const dots = document.querySelectorAll('.slide-dot');

    function showSlide(index) {
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');

      current = (index + slides.length) % slides.length;

      slides[current].classList.add('active');
      dots[current].classList.add('active');
      caption.textContent = slides[current].dataset.caption || '';
    }

    document.querySelector('.slide-prev').addEventListener('click', () => showSlide(current - 1));
    document.querySelector('.slide-next').addEventListener('click', () => showSlide(current + 1));


    dots[0].classList.add('active');
    caption.textContent = slides[0].dataset.caption || '';
  })();
