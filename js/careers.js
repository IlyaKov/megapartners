new Filter({
  activeFilter: document.querySelector('.filters .btn'),
  activeClass: 'active',
  filters: document.querySelector('.filters'),
  filtersTag: 'button',
  markerTag: 'small',
  initial_container: document.querySelector('.filtered-content'),
  initial_content: document.querySelectorAll('.filtered-content li'),
})

new Filter({
  activeFilter: document.querySelector('.splide .filters .btn'),
  activeClass: 'active',
  filters: document.querySelector('.splide .filters'),
  filtersTag: 'button',
  markerTag: 'small',
  initial_container: document.querySelector('.filtered-content'),
  initial_content: document.querySelectorAll('.filtered-content li'),
})

const careers = new Splide( '#positions .splide', {
  perPage: 3,
  arrows: false,
  pagination: false,
  start: 0,
  autoWidth: true,
  speed: 700,
  snap: true,
  drag: true,
  omitEnd: true
});

careers.mount()

const fileInput = document.querySelector('#file')
const fileLabel = document.querySelector('#file + label')
const deleteHandler = (event) => {
  console.log(event.target)
  event.stopPropagation()
  if (event.target.tagName.toLowerCase() === 'svg') {
    fileLabel.classList.remove('active-file')
    fileInput.files.length = 0
    fileInput.disabled = false
    fileLabel.innerHTML = `
      <svg class="me-2" width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.9524 4.61194C14.3058 4.05176 13.471 3.75725 12.6161 3.78767C11.7612 3.8181 10.9495 4.17121 10.3444 4.77594L3.55835 11.5599C3.42103 11.7073 3.25543 11.8255 3.07143 11.9075C2.88743 11.9895 2.6888 12.0336 2.4874 12.0371C2.28599 12.0407 2.08594 12.0036 1.89916 11.9282C1.71238 11.8527 1.54271 11.7405 1.40028 11.598C1.25784 11.4556 1.14555 11.2859 1.07011 11.0991C0.994666 10.9124 0.957617 10.7123 0.961171 10.5109C0.964725 10.3095 1.00881 10.1109 1.09079 9.92686C1.17278 9.74287 1.29098 9.57726 1.43835 9.43994L8.22235 2.65594C8.81839 2.05189 9.52888 1.57273 10.3123 1.24648C11.0957 0.920238 11.9363 0.753455 12.7849 0.755886C13.6335 0.758316 14.4731 0.929912 15.2546 1.26064C16.0361 1.59137 16.7438 2.07459 17.3364 2.68205C17.929 3.28951 18.3945 4.00901 18.7057 4.79849C19.017 5.58797 19.1677 6.43158 19.149 7.27999C19.1304 8.12839 18.9428 8.96458 18.5972 9.73963C18.2517 10.5147 17.755 11.2131 17.1364 11.7939L7.69035 20.7859C6.96021 21.4983 5.97699 21.8915 4.95698 21.8789C3.93697 21.8663 2.96373 21.4491 2.25135 20.7189C1.53898 19.9888 1.14584 19.0056 1.1584 17.9856C1.17097 16.9656 1.58821 15.9923 2.31835 15.2799L10.8044 6.79194C10.9428 6.64874 11.1084 6.53455 11.2914 6.45602C11.4744 6.3775 11.6713 6.33621 11.8705 6.33457C12.0696 6.33294 12.2671 6.37098 12.4514 6.44649C12.6358 6.522 12.8032 6.63346 12.9439 6.77436C13.0847 6.91527 13.196 7.0828 13.2714 7.26718C13.3467 7.45156 13.3845 7.64909 13.3827 7.84826C13.3809 8.04743 13.3394 8.24424 13.2607 8.42721C13.182 8.61017 13.0677 8.77564 12.9244 8.91394L4.44435 17.4019C4.29599 17.5609 4.21456 17.771 4.21696 17.9884C4.21936 18.2059 4.30541 18.4141 4.45724 18.5697C4.60907 18.7254 4.81502 18.8167 5.03235 18.8245C5.24967 18.8324 5.46168 18.7563 5.62435 18.6119L15.0684 9.61994C15.41 9.29476 15.68 8.90174 15.8608 8.4661C16.0417 8.03047 16.1294 7.56183 16.1185 7.09027C16.1076 6.61871 15.9982 6.15465 15.7974 5.72785C15.5966 5.30105 15.3087 4.92095 14.9524 4.61194Z" fill="white" fill-opacity="0.2"/>
      </svg>
      Select file
  `
    event.stopPropagation()
  }
  event.stopPropagation()
}

fileInput.onchange = ({ target }) => {
  if (target.tagName === 'svg') return
  if (target.files.length) {
    fileLabel.classList.add('active-file')
    fileLabel.innerHTML =
      `
      <span class="truncated-text">${target.files[0].name}</span>
      <svg class="delete-icon" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path pointer-events="none" d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM3.46 8.88L4.87 7.47L7 9.59L9.12 7.47L10.53 8.88L8.41 11L10.53 13.12L9.12 14.53L7 12.41L4.88 14.53L3.47 13.12L5.59 11L3.46 8.88ZM10.5 1L9.5 0H4.5L3.5 1H0V3H14V1H10.5Z" fill="white"/>
      </svg>
  `
    setTimeout(() => fileInput.disabled = true, 0)
    const deleteFileIcon = document.querySelector('.select-file .delete-icon')
    deleteFileIcon.addEventListener('click', deleteHandler, true)
  }
}

const formBtn = document.querySelector('.send-cv-btn')

const validateForm = () => {
  let valid = true
  const inputs = document.querySelectorAll('.input')

  inputs.forEach(input => {
    if (input.querySelector('button')) return
    input.querySelector('.error-text').textContent = ''
    input.querySelector('.error-label')?.classList.remove('error-label')
    input.querySelector('.error-input')?.classList.remove('error-input')
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

    if (input.querySelector('#file') && !input.querySelector('#file').files.length) {
      valid = false

      input.querySelector('label').classList.add('error-input')
      input.querySelector('span').classList.add('error-label')
      input.querySelector('.error-text').textContent = 'Please, upload a file'
    }
  })

  return valid
}

formBtn.addEventListener('click', (event) => {
  event.preventDefault()

  if (validateForm()) {
    console.log('yeeee')
  } else {
    console.log('nooooooo')
  }
})
