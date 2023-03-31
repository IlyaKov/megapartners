let mainNavLinks = document.querySelectorAll("nav ol li");
let mainSections = document.querySelectorAll("#guide .content ol > li");

let lastId = '#section-5';
let cur = [];
let selected
const linksContainer = document.querySelector('nav ol')
linksContainer.addEventListener('click', ({target}) => {
  const targetSection = document.querySelector(`.content ${target.dataset.section}`)

  targetSection.scrollIntoView({block: 'center'})
  selected?.classList.remove('current')
  target.classList.add('current')
  selected = target
})

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  // mainNavLinks.forEach((link) => {
  //   let section = document.querySelector(link.dataset.section);
  //
  //   if (
  //     section.offsetTop <= fromTop &&
  //     section.offsetTop + section.offsetHeight + 450 > fromTop - 500
  //   ) {
  //     link.classList.add("current");
  //   } else {
  //     link.classList.remove("current");
  //   }
  // });
});
