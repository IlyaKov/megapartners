const icon = document.querySelector('#nav-icon3')
icon.addEventListener('click', ({ target }) => {
  const sidebar = document.querySelector('.sidebar')
  const callback = (element) => {
    element.classList.toggle('open')
    sidebar.classList.toggle('open')
  }

  if (target.tagName === 'DIV') {
    callback(target)
  } else {
    callback(target.parentNode)
  }
}, true)

const dd = document.querySelector('header #dropdown-wrapper');
const links = document.querySelectorAll('header .dropdown-list li');
const span = document.querySelector('header .selected-language span');

dd.addEventListener('click', function() {
  this.classList.toggle('is-active');
});

links.forEach((element) => {
  element.addEventListener('click', function(evt) {
    span.innerHTML = evt.currentTarget.textContent;
  })
})
