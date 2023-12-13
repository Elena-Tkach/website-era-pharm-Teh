const btnHeader = document.querySelector('.js-btn-menu-open ');
const scroll = () => {
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 50) {
      btnHeader.classList.add('has-scrolled');
    } else {
      btnHeader.classList.remove('has-scrolled');
    }
  });
};

export default scroll;
