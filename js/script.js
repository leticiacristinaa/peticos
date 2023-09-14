function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const classActive = "active";

  accordionList[0].classList.toggle(classActive);
  accordionList[0].nextElementSibling.classList.toggle(classActive);

  function activeAccordion() {
    this.classList.toggle(classActive);
    this.nextElementSibling.classList.toggle(classActive);
  }

  accordionList.forEach((item) => {
    item.addEventListener("click", activeAccordion);
  });
}

function initAnimaScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  const windowHalf = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionVisible = sectionTop - windowHalf < 0;
      if (sectionVisible) {
        section.classList.add('active');
      }
    });
  }

  animaScroll();

  window.addEventListener("scroll", animaScroll);
}

initAnimaScroll();
