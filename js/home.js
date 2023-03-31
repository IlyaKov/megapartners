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
  start: 0,
  speed: 500,
  rewind: true,
  snap: true,
  drag: true,
  dragMinThreshold: {
    mouse: 120,
    touch: 60,
  },
} );

brands.mount();

new Filter({
  activeFilter: document.querySelector('.filters .btn'),
  activeClass: 'active',
  filters: document.querySelector('.filters'),
  filtersTag: 'button',
  markerTag: '.filter-marker',
  initial_container: document.querySelector('.filtered-content'),
  initial_content: document.querySelectorAll('.filtered-content > h3'),
  filterInitial: 'eur'
})
