const btnHeader = document.querySelector('.js-btn-menu-open ');
const scrollItems = document.querySelectorAll('.js-scroll');

const menuScrolled = (btnEl, scrollPosition) => {
  const btn = btnEl;

  if (scrollPosition >= 100) {
    btn.classList.add('has-scrolled');
  } else {
    btn.classList.remove('has-scrolled');
  }
};

const checkBoxes = (boxEl) => {
  const box = boxEl;
  const triggerTop = window.innerHeight - 50;

  scrollItems.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerTop) {
      console.log(boxTop, triggerTop);
      box.classList.add('isanimate');
    }
  });
}

const scroll = () => {
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    menuScrolled(btnHeader, scrollPosition);
    checkBoxes(scrollItems);
  });
};

export default scroll;
