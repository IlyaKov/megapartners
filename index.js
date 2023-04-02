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

new SimpleBar(document.getElementById('blog'), {
  autoHide: false,
  clickOnTrack: false,
  forceEnabled: true,
  forceVisible: true,
});

