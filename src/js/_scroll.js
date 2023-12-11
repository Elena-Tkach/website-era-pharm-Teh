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

// function scrollheader() {
//     const scrollPosition = () => window.pageXOffset || document.documentElement.scrollTop;
//     const containHide = () => header.classList.contains(`hide`);

//     if (scrollPosition() >
//         scroll && !containHide() &&
//         scrollPosition() > defaultOffset) {
//         header.classList.add(`hide`);

//     }

//     if (scrollPosition() < scroll && containHide) {
//         header.classList.remove(`hide`);

//     }

//     scroll = scrollPosition();
// }
