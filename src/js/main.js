const counters = document.querySelectorAll('.counter');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      animateCount(counter);
      observer.unobserve(counter);
    }
  });
}, options);

counters.forEach(counter => {
  observer.observe(counter);
});

function animateCount(element) {
  const target = +element.getAttribute('data-target');
  const duration = target * (200 / Math.sqrt(target));
  const startTime = performance.now();

  function updateCount(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    element.textContent = Math.floor(progress * target);
    if (progress < 1) {
      requestAnimationFrame(updateCount);
    } else {
      element.textContent = target;
    }
  }

  requestAnimationFrame(updateCount);
}