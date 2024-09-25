import {
  setUpAccordions,
  setUpCarousel,
  setUpHeader,
  setUpNavbarMobile,
  setUpTabFilter,
} from "./controllers.js";
import setUpNewsletter from "./inputs.js";
import triggerAnimations from "./sections.js";

setUpCarousel(5000);
setUpNavbarMobile();
setUpAccordions();
setUpHeader();
setUpTabFilter();

triggerAnimations(".slide", ".fade-in");
setUpNewsletter();
