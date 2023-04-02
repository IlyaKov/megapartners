/*________________HERO SECTION____________*/
new SimpleBar(document.getElementById('blog'), {
  autoHide: false,
  clickOnTrack: false,
  forceEnabled: true,
  forceVisible: true,
});

/*________________EVENTS SECTION____________*/
const events = new Splide( '#events .splide', {
  pagination: false,
  arrows: false,
  breakpoints: {
    768: {
      gap: 0,
      padding: 0,
      perPage: 1,
      drag: false,
      snap: false
    }
  },
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

events.on( 'mounted move', function () {
  const end = events.Components.Controller.getEnd() + 1;
  const rate = Math.min( ( events.index + 1 ) / end, 1 );
  bar.style.width = String( 100 * rate ) + '%';
} );

events.mount();


/*________________BRANDS SECTION____________*/
const brands = new Splide( '#brands .splide', {
  perPage: 1,
  arrows: false,
  pagination: false,
  start: 1,
  speed: 700,
  rewind: true,
  snap: true,
  drag: false,
} );

const thumbnails = document.getElementsByClassName( 'thumbnail' );
let current;

for ( let i = 0; i < thumbnails.length; i++ ) {
  initThumbnail( thumbnails[ i ], i );
}

function initThumbnail( thumbnail, index ) {
  thumbnail.addEventListener( 'click', function () {
    brands.go( index );
  } );
}

brands.on( 'mounted move', function () {
  const thumbnail = thumbnails[ brands.index ];

  if ( thumbnail ) {
    if ( current ) {
      current.classList.remove( 'is-active' );
    }

    thumbnail.classList.add( 'is-active' );
    current = thumbnail;
  }
} );

brands.mount();


/*________________COMMISSIONS SECTION____________*/
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
