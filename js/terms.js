const elementsToChangeBackgroundToFont = ['body']
const elementsToChangeColorToMain = ['ol li', 'h2']

const lightModeToggle = document.querySelector('.theme-toggle')
const mainBgColor = getComputedStyle(document.body).getPropertyValue('--main-bg-color')
const mainFontColor = getComputedStyle(document.body).getPropertyValue('--main-font-color')

const changeElementsColor = (elements, color) => document.querySelectorAll(elements).forEach(elem => elem.style.color = color)
const changeElementsBackground = (elements, color) => document.querySelectorAll(elements).forEach(elem => elem.style.backgroundColor = color)
const changeSvgFill = (elements, color) => document.querySelectorAll(elements).forEach(elem => elem.style.fill = color)

const handleLightMode = () => {
  const isDarkMode = Number(document.body.style.backgroundColor !== mainFontColor)
  const colorsSetForLightMode = [mainBgColor, mainFontColor]
  const colorsSetForDarkMode = [mainFontColor, mainBgColor]

  lightModeToggle.classList.toggle('light')

  elementsToChangeColorToMain.forEach(element => changeElementsColor(element, colorsSetForDarkMode[isDarkMode]))
  elementsToChangeBackgroundToFont.forEach(element => changeElementsBackground(element, colorsSetForLightMode[isDarkMode]))
}

lightModeToggle.addEventListener('click', handleLightMode)
