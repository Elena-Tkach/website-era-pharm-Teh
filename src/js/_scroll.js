const btnHeader = document.querySelector('.js-btn-menu-open ');
const anchors = document.querySelectorAll('.js-anchors');

const menuScrolled = (btnEl, scrollPosition) => {
  const btn = btnEl;

  if (scrollPosition >= 100) {
    btn.classList.add('has-scrolled');
  } else {
    btn.classList.remove('has-scrolled');
  }
};

const slowScroll = (anchorsPage) => {
  for (let anchor of anchorsPage) {
    anchor.addEventListener(`click`, (e) => {
      e.preventDefault();
      const blockID = anchor.getAttribute(`href`)
      document.querySelector(`${blockID}`).scrollIntoView({
        behavior: `smooth`,
        block: `start`
      })
    })
  }
};

const scroll = () => {
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    menuScrolled(btnHeader, scrollPosition);
    slowScroll(anchors);
  });
};

export default scroll;
