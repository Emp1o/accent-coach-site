(() => {
  const cards = document.querySelectorAll('.feature-card, .install-card, blockquote, details');
  if (!('IntersectionObserver' in window)) return;
  cards.forEach((card) => card.classList.add('reveal'));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });
  cards.forEach((card) => observer.observe(card));
})();
