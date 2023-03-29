new Filter({
  activeFilter: document.querySelector('.filters .btn'),
  activeClass: 'active',
  filters: document.querySelector('.filters'),
  filtersTag: 'button',
  markerTag: 'small',
  initial_container: document.querySelector('.filtered-content'),
  initial_content: document.querySelectorAll('.filtered-content li'),
})
