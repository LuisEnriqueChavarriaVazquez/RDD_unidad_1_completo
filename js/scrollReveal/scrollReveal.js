let boxes = document.querySelectorAll('.lazy');

function scrollReveal() {
  boxes.forEach((box) => {
    let boxTop = box.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;
    if (boxTop < windowHeight - 50) {
      box.style.opacity = '1';
    }
  });
}

window.addEventListener('scroll', scrollReveal);
window.scrollTo(0, 50);