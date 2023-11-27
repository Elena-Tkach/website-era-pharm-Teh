export const showBlock = () => {
  let previousActiveElement;
  const showMoreBtnEl = document.querySelector('.js-btn-show-more');
  const blockMoreEl = document.querySelector('.js-block-more');
  const menuBtnOpenEl = document.querySelector('.js-btn-menu-open');
  const navBlockEl = document.querySelector('.js-nav-block');
  const closeMenuBtnEl = document.querySelector('.js-btn-close');
  const overlay = document.querySelector('.js-overlay');

  const toggleAccordeon = () => {
    blockMoreEl.classList.toggle('show-slider');
   
    blockMoreEl.classList.contains('show') ? blockMoreEl.setAttribute('aria-hidden', 'false') : 
      blockMoreEl.setAttribute('aria-hidden', 'true');
    
    blockMoreEl.classList.contains('show') ? showMoreBtnEl.setAttribute('aria-label', 'Закрыть блок') :
       showMoreBtnEl.setAttribute('aria-label', 'Показать больше информации');
    
  };


  const showMenu = () => {
    navBlockEl.classList.add('show'); 
    overlay.classList.add('show');
    document.body.classList.add('no-scroll');
    previousActiveElement = document.activeElement;

    
   

     setTimeout(() => {
    closeMenuBtnEl.focus();
  }, 100);

  }

    const hideMenu = () => {
      navBlockEl.classList.remove('show'); 
      overlay.classList.remove('show');
      document.body.classList.remove('no-scroll');
      previousActiveElement.focus();

  }
  

  if (showMoreBtnEl) {
  showMoreBtnEl.addEventListener('click', toggleAccordeon);
  }
    
  menuBtnOpenEl.addEventListener('click', showMenu);
  closeMenuBtnEl.addEventListener('click', hideMenu);
  overlay.addEventListener('click', hideMenu);

};