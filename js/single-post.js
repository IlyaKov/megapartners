const copyToCB = document.querySelector('.copy-to-clipboard')

copyToCB.addEventListener('click', () => navigator.clipboard.writeText(window.location.href))

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

const elementsToChangeBackgroundToFont = ['body', '.subscribe-form input']
const elementsToChangeBackgroundToMain = ['.info-tag', '.subscribe-form .input span', '.subscribe-form .input span']
const elementsToChangeColorToMain = ['p', 'h2', '.subscribe-form header']
const elementsToChangeColorToFont = ['.info-tag', '.subscribe-form .input span']
const svgFillToMain = ['.share-panel svg path:first-child']
const svgFillToFont = ['.share-panel svg path:last-child']

const lightModeToggles = document.querySelectorAll('.theme-toggle')
const mainBgColor = getComputedStyle(document.body).getPropertyValue('--main-bg-color')
const mainFontColor = getComputedStyle(document.body).getPropertyValue('--main-font-color')

const changeElementsColor = (elements, color) => document.querySelectorAll(elements).forEach(elem => elem.style.color = color)
const changeElementsBackground = (elements, color) => document.querySelectorAll(elements).forEach(elem => elem.style.backgroundColor = color)
const changeSvgFill = (elements, color) => document.querySelectorAll(elements).forEach(elem => elem.style.fill = color)

const handleLightMode = ({ target }) => {
  const isDarkMode = Number(document.body.style.backgroundColor !== mainFontColor)
  const colorsSetForLightMode = [mainBgColor, mainFontColor]
  const colorsSetForDarkMode = [mainFontColor, mainBgColor]

  target.classList.toggle('light')

  elementsToChangeColorToMain.forEach(element => changeElementsColor(element, colorsSetForDarkMode[isDarkMode]))
  elementsToChangeColorToFont.forEach(element => changeElementsColor(element, colorsSetForLightMode[isDarkMode]))
  elementsToChangeBackgroundToFont.forEach(element => changeElementsBackground(element, colorsSetForLightMode[isDarkMode]))
  elementsToChangeBackgroundToMain.forEach(element => changeElementsBackground(element, colorsSetForDarkMode[isDarkMode]))
  svgFillToMain.forEach(element => changeSvgFill(element, colorsSetForDarkMode[isDarkMode]))
  svgFillToFont.forEach(element => changeSvgFill(element, colorsSetForLightMode[isDarkMode]))
}

lightModeToggles.forEach(toggle => toggle.addEventListener('click', handleLightMode, false))
