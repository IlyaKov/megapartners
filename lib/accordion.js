const ACCORDION = {
  CONTAINER: '.accordion-container',
  TITLE: '.accordion__intro',
  CONTENT: '.accordion__content',
  CROSS: '.cross-icon',
  activeStates: {
    cross: 'cross-icon-selected',
    container: 'accordion-container__active'
  }
}
const crossIcons = document.querySelectorAll(ACCORDION.CROSS)
const accordions = document.querySelectorAll(ACCORDION.CONTAINER);

const openAccordion = (accordion) => {
  const content = accordion.querySelector(ACCORDION.CONTENT);
  const crossIcon = accordion.querySelector(ACCORDION.CROSS);
  const computedMaxHeight = `${content.scrollHeight +
  parseInt(window.getComputedStyle(document.body).getPropertyValue('font-size')) * 1.5}px`

  accordion.classList.add(ACCORDION.activeStates.container);
  crossIcon.classList.add(ACCORDION.activeStates.cross)


  content.style.maxHeight = computedMaxHeight;
};

const closeAccordion = (accordion) => {
  const content = accordion.querySelector(ACCORDION.CONTENT);
  const crossIcon = accordion.querySelector(ACCORDION.CROSS);

  accordion.classList.remove(ACCORDION.activeStates.container);
  crossIcon.classList.remove(ACCORDION.activeStates.cross)

  content.style.maxHeight = null;
};

accordions.forEach((accordion) => {
  const content = accordion.querySelector(ACCORDION.CONTENT);

  accordion.onclick = () => {
    if (content.style.maxHeight) {
      closeAccordion(accordion);
    } else {
      accordions.forEach((accordion) => closeAccordion(accordion));
      openAccordion(accordion);
    }
  };
});
