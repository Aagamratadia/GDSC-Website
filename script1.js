let sections = document.querySelectorAll('section');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 300;
    let height = sec.offsetHeight + 1000;

    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animate");
    } 
  })
}
