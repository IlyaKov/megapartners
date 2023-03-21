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


const events = new Splide( '#events .splide', {
  pagination: false,
  arrows: false,
  // type: 'slide',
  rewind: true,
  perPage: 2,
  speed: 500,
  start: 0,
  gap: '1.5rem',
  snap: true,
  padding: { right: '15rem' },
  drag: true,
  dragMinThreshold: {
    mouse: 20,
    touch: 30,
  },
});
const bar = events.root.querySelector( '.my-carousel-progress-bar' );

// Updates the bar width whenever the carousel moves:
events.on( 'mounted move', function () {
  const end = events.Components.Controller.getEnd() + 1;
  const rate = Math.min( ( events.index + 1 ) / end, 1 );
  bar.style.width = String( 100 * rate ) + '%';
} );

events.mount();

const brands = new Splide( '#brands .splide', {
  perPage: 1,
  arrows: false,
  snap: true,
  drag: true,
  dragMinThreshold: {
    mouse: 20,
    touch: 30,
  },
} );

brands.mount();
