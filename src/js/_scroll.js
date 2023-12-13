const btnHeader = document.querySelector('.js-btn-menu-open ');

export const scroll = () => {
  const sc = window.scrollY;
  const scrollPosition = () => window.scrollY || document.documentElement.scrollTop;

  window.addEventListener('scroll', () => {
    const sc = window.scrollY;
    if (sc >= 50) {
      btnHeader.classList.add('has-scrolled');
    } else {
					btnHeader.classList.remove('has-scrolled');
				}
  });
};

export default scroll;
