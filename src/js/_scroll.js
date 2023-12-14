const btnHeader = document.querySelector('.js-btn-menu-open ');

export const scroll = () => {
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 100) {
      btnHeader.classList.add('has-scrolled');
    } else {
      btnHeader.classList.remove('has-scrolled');
    }
  });
};

export default scroll;
