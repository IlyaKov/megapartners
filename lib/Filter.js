const FILTER_ALL = 'all'

class Filter {
  constructor(config) {
    this.init(config)
  }
  init({ filters, initial_content, initial_container, activeFilter, activeClass, filtersTag, markerTag, filterInitial }) {
    console.log(activeFilter)
    this.markerTag = markerTag
    this.filters = filters
    this.filtersTag = filtersTag
    this.activeFilter = activeFilter
    this.activeClass = activeClass
    this.content = initial_content
    this.initialContainerData = initial_container.innerHTML
    this.container = initial_container

    this.activeFilter.classList.add(this.activeClass)
    this.filters.addEventListener('click', this.handleFilterClick)

    if (filterInitial) this.handleFiltersContent(filterInitial)
  }

  handleFilterClick = ({ target }) => {
    if (target.classList.contains(this.activeClass)) return

    if (target.tagName === this.filtersTag.toUpperCase()) {
      this.handleFilterStyles(target)
      this.handleFiltersContent(target?.dataset?.filter)
    }
  }

  handleFilterStyles = (element) => {
    this.activeFilter.classList.remove(this.activeClass)
    element.classList.add(this.activeClass)
    this.activeFilter = element
  }

  handleFiltersContent = (filter) => {
    const content = this.content

    this.container.innerHTML = ''
    this.filterContent(filter, content)
  }

  filterContent = (filter, content) => {
    content.forEach((element) => {
      const marker = element.querySelector(this.markerTag) || element

      if (filter === FILTER_ALL) {
        this.container.innerHTML = this.initialContainerData

        return
      }

      if (marker.dataset.marker === filter) {
        this.container.appendChild(element)
      }
    })
  }
}
