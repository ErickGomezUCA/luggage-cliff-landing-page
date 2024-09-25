let slideIndex = 0;
const carousel = document.querySelector(".carousel");

let slideInterval;

// Carousel
function setUpCarousel(autoSlide) {
  const [leftButton, rightButton] = carousel.querySelectorAll(".arrow");

  leftButton.addEventListener("click", () => changeSlide(-1));
  rightButton.addEventListener("click", () => changeSlide(1));

  // Create indicators
  const slides = carousel.querySelectorAll(".slide");
  const indicatorContainer = carousel.querySelector(".carousel-indicator");

  slides.forEach((slide, index) => {
    const indicator = document.createElement("div");
    indicator.className = "indicator";
    indicator.setAttribute("index", index);

    if (index === slideIndex) indicator.classList.add("active");

    indicator.addEventListener("click", () => setSlide(index));

    indicatorContainer.appendChild(indicator);
  });

  // Set autoSlide
  setUpCarouselInterval(autoSlide);

  // Disable autoSlide when clicking to controllers
  const cancelIntervalElements = [
    leftButton,
    rightButton,
    ...indicatorContainer.childNodes,
  ];
  cancelIntervalElements.forEach((element) => {
    element.addEventListener("click", () => {
      clearInterval(slideInterval);
      setUpCarouselInterval(autoSlide);
    });
  });
}

function setUpCarouselInterval(autoSlide) {
  slideInterval = setInterval(() => changeSlide(1), autoSlide);
}

function setSlide(index) {
  // Set passed index and slideIndex the same value
  // because indicators can jump between slides
  slideIndex = index;

  const content = carousel.querySelector(".carousel-content");
  const indicators = carousel.querySelectorAll(".indicator");

  // Move slide
  content.style.transform = `translateX(-${index * 100}%)`;

  // Update counter
  indicators.forEach((indicator) => {
    indicator.classList.remove("active");

    if (indicator.getAttribute("index") == index)
      indicator.classList.add("active");
  });
}

function changeSlide(value) {
  const slides = carousel.querySelectorAll(".slide");

  slideIndex += value;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  setSlide(slideIndex);
}

// Other controllers
function setUpTabFilter() {
  const container = document.querySelector(".filter");
  const tabs = container.querySelectorAll(".tab");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Filter elements
      container.setAttribute("filter", tab.getAttribute("target"));

      // Reset active
      tabs.forEach((tab) => tab.classList.remove("active"));

      // Set new active
      if (tab.getAttribute("target") === container.getAttribute("filter"))
        tab.classList.add("active");
    });
  });
}

function setUpAccordions() {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
    accordion.addEventListener("click", () => {
      accordion.classList.toggle("active");

      const content = accordion.querySelector(".accordion-content");

      // Set dynamic height to content when entering active state
      content.style.maxHeight = content.style.maxHeight
        ? null
        : (content.style.maxHeight = `${content.scrollHeight}px`);
    });
  });
}

function setUpNavbarMobile() {
  const menuButton = document.querySelector(".navbar-button");
  const menuButtonIcon = menuButton.querySelector("i");
  const navbar = document.querySelector(".header-mobile-menu");

  menuButton.addEventListener("click", () => {
    navbar.classList.toggle("show");

    menuButtonIcon.textContent = navbar.classList.contains("show")
      ? "close"
      : "menu";
  });
}

function setUpHeader() {
  const header = document.querySelector(".main-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.remove("transparent");
      return;
    }

    header.classList.add("transparent");
  });
}

export {
  setUpAccordions,
  setUpNavbarMobile,
  setUpCarousel,
  setUpHeader,
  setUpTabFilter,
};
