/*________________HERO SECTION____________*/
new SimpleBar(document.getElementById('blog'), {
  autoHide: false,
  clickOnTrack: false,
  forceEnabled: true,
  forceVisible: true,
});

new SimpleBar(document.getElementById('contact-textarea'), {
  autoHide: false,
  clickOnTrack: false,
  forceEnabled: true,
  forceVisible: true,
});

new SimpleBar(document.getElementById('blog-mobile'), {
  autoHide: false,
  clickOnTrack: false,
  forceEnabled: true,
  forceVisible: true,
});

/*________________EVENTS SECTION____________*/
const events = new Splide( '#events .splide', {
  pagination: false,
  arrows: false,
  mediaQuery: 'max',
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
  type: 'fade',
  perPage: 1,
  arrows: false,
  pagination: false,
  start: 0,
  speed: 1200,
  rewind: true,
  snap: true,
  drag: false,
});

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


/*________________COMMISSIONS SECTION____ENABLE-FOR-COMMISSIONS-CALCULATOR________*/
// new Filter({
//   activeFilter: document.querySelector('.filters .btn'),
//   activeClass: 'active',
//   filters: document.querySelector('.filters'),
//   filtersTag: 'button',
//   markerTag: '.filter-marker',
//   initial_container: document.querySelector('.filtered-content'),
//   initial_content: document.querySelectorAll('.filtered-content > h3'),
//   filterInitial: 'eur'
// })

/*________________CONTACT SECTION____________*/
const formBtn = document.querySelector('#contact form .cta-btn')

const validateForm = () => {
  let valid = true
  const inputs = document.querySelectorAll('#contact form .input')

  inputs.forEach(input => {
    if (input.querySelector('button')) return

    input.querySelector('.error-text').textContent = ''
    input.querySelector('.error-label')?.classList.remove('error-label')
    input.querySelector('.error-input')?.classList.remove('error-input')

    if (input.classList.contains('dropdown-wrapper') && input.querySelector('.dropdown-value').textContent === 'Choose one...') {
      valid = false

      input.querySelector('.dropdown-value').classList.add('error-input')
      input.querySelector('.dropdown-title').classList.add('error-label')
      input.querySelector('.error-text').textContent = 'This field is required'
    }

    if (
      (input.querySelector('input[type=text]') || input.querySelector('input[type=email]'))
      && !input.querySelector('input').value
    ) {
      valid = false

      input.querySelector('input').classList.add('error-input')
      input.querySelector('span').classList.add('error-label')
      input.querySelector('.error-text').textContent = 'This field is required'
    }

    if (input.querySelector('textarea') && !input.querySelector('textarea')?.value) {
      valid = false

      input.querySelector('textarea').classList.add('error-input')
      input.querySelector('span').classList.add('error-label')
      input.querySelector('.error-text').textContent = 'This field is required'
    }
  })

  return valid
}

formBtn.addEventListener('click', (event) => {
  event.preventDefault()

  if (validateForm()) {
    const data = {
      name: document.querySelector('#contact form input[type="text"]').value,
      email: document.querySelector('#contact form input[type="email"]').value,
      text: document.querySelector('#contact form textarea').value,
      subject: document.querySelector('#contact form .dropdown-value').textContent.toLowerCase(),
    }

    console.log(data)
  } else {
    console.log('nooooooo')
  }
})

const dropdown = document.querySelector('#contact #dropdown-wrapper');
const dropdownLinks = document.querySelectorAll('#contact .dropdown-list li');
const dropdownValue = document.querySelector('#contact #dropdown-wrapper .dropdown-value');

dropdown.addEventListener('click', () => dropdown.classList.toggle('is-active'));

dropdownLinks.forEach((element) => {
  element.addEventListener('click', function(evt) {
    dropdownValue.innerHTML = evt.currentTarget.textContent;
    dropdownValue.classList.add('active')
  })
})

const svgContainer = document.querySelector('#about .svg.coin')
const coinsInfoContainer = document.querySelector('#about .about_cards')
let defaultCoin = svgContainer.querySelector('object')
let currentCoin = svgContainer.querySelector('object')

coinsInfoContainer.addEventListener('mouseover', ({ target }) => {
  if (target.tagName.toLowerCase() === 'li') {
    const relatedIcon = svgContainer.querySelector(`object[data-coin=${target.dataset.coin}]`)
    currentCoin.classList.remove('active')
    relatedIcon.classList.add('active')
    currentCoin = relatedIcon
  }
})

coinsInfoContainer.addEventListener('mouseout', () => {
  if (currentCoin.dataset.coin !== defaultCoin.dataset.coin) {
    currentCoin.classList.remove('active')
    defaultCoin.classList.add('active')
    currentCoin = defaultCoin
  }
  return
})
