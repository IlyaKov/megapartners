new Filter({
  activeFilter: document.querySelector('.filters .btn'),
  activeClass: 'active',
  filters: document.querySelector('.filters'),
  filtersTag: 'button',
  markerTag: '.news-tag',
  initial_container: document.querySelector('.filtered-content'),
  initial_content: document.querySelectorAll('.filtered-content li'),
})

new Filter({
  activeFilter: document.querySelector('.splide .filters .btn'),
  activeClass: 'active',
  filters: document.querySelector('.splide .filters'),
  filtersTag: 'button',
  markerTag: '.news-tag',
  initial_container: document.querySelector('.filtered-content'),
  initial_content: document.querySelectorAll('.filtered-content li'),
})

const news = new Splide( '#news .splide', {
  perPage: 3,
  arrows: false,
  pagination: false,
  start: 0,
  autoWidth: true,
  speed: 700,
  // rewind: true,
  snap: true,
  drag: true,
  omitEnd: true
});

news.mount()
