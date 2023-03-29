const news = new Splide( '#other_news .splide', {
  perPage: 3,
  start: 0,
  mediaQuery: 'max',
  breakpoints: {
    768: {
      gap: 0,
      perPage: 1,
      drag: false,
      snap: false
    }
  },
  classes: {
    arrows: 'splide__arrows',
    arrow : 'splide__arrow',
    prev  : 'splide__arrow--prev left',
    next  : 'splide__arrow--next right',
  },
  pagination: false,
  gap: '1.5rem',
  rewind: true,
  snap: true,
  drag: true,
  dragMinThreshold: {
    mouse: 120,
    touch: 60,
  },
} );

news.mount();

const elementsToChangeBackgroundToFont = ['body']
const elementsToChangeBackgroundToMain = ['.info-tag']
const elementsToChangeColorToMain = ['p', 'h2', '.side_info small']
const elementsToChangeColorToFont = ['.info-tag']

const lightModeToggle = document.querySelector('.theme-toggle')
const mainBgColor = getComputedStyle(document.body).getPropertyValue('--main-bg-color')
const mainFontColor = getComputedStyle(document.body).getPropertyValue('--main-font-color')

const changeElementsColor = (elements, color) => document.querySelectorAll(elements).forEach(elem => elem.style.color = color)
const changeElementsBackground = (elements, color) => document.querySelectorAll(elements).forEach(elem => elem.style.backgroundColor = color)

const handleLightMode = () => {
  const isDarkMode = Number(document.body.style.backgroundColor !== mainFontColor)
  const colorsSetForLightMode = [mainBgColor, mainFontColor]
  const colorsSetForDarkMode = [mainFontColor, mainBgColor]

  lightModeToggle.classList.toggle('light')

  elementsToChangeColorToMain.forEach(element => changeElementsColor(element, colorsSetForDarkMode[isDarkMode]))
  elementsToChangeColorToFont.forEach(element => changeElementsColor(element, colorsSetForLightMode[isDarkMode]))
  elementsToChangeBackgroundToFont.forEach(element => changeElementsBackground(element, colorsSetForLightMode[isDarkMode]))
  elementsToChangeBackgroundToMain.forEach(element => changeElementsBackground(element, colorsSetForDarkMode[isDarkMode]))
}

lightModeToggle.addEventListener('click', handleLightMode)
