function triggerAnimations(...classes) {
  const sections = [];

  for (let cl of classes) {
    sections.push(...document.querySelectorAll(cl));
  }

  const appearOnScroll = new IntersectionObserver(
    (elements, appearOnScroll) => {
      elements.forEach((element) => {
        // Don't apply fade animation when is not appearing on screen
        if (!element.isIntersecting) {
          return;
        }

        element.target.classList.add("visible");
        appearOnScroll.unobserve(element.target);
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((section) => {
    appearOnScroll.observe(section);
  });
}

export default triggerAnimations;
