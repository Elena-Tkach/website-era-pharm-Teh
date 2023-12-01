export const showBlock = () => {
  let previousActiveElement;
  const modal = document.querySelector('.js-modal');
  const showMoreBtnEl = document.querySelector('.js-btn-show-more');
  const blockMoreEl = document.querySelector('.js-block-more');
  const navBlockEl = document.querySelector('.js-nav-block');
  const closeMenuBtnEl = document.querySelector('.js-btn-close');
  const overlay = document.querySelector('.js-overlay');


  const toggleAccordeon = () => {
    blockMoreEl.classList.toggle('show-slider');
   
    blockMoreEl.classList.contains('show') ?
      blockMoreEl.setAttribute('aria-hidden', 'false') : 
      blockMoreEl.setAttribute('aria-hidden', 'true');
    
    blockMoreEl.classList.contains('show') ?
      showMoreBtnEl.setAttribute('aria-label', 'Закрыть блок') :
       showMoreBtnEl.setAttribute('aria-label', 'Показать больше информации');
    
  };



  const showMenu = (element, closeMenuBtn) => {
    element.classList.add('show'); 
    previousActiveElement = document.activeElement;

     setTimeout(() => {
      closeMenuBtn.focus();
     }, 100);

  }

  const hideMenu = (element) => {
    element.classList.remove('show'); 
    previousActiveElement.focus();
  }

  document.body.addEventListener('click', event => {
    
    if (showMoreBtnEl) {
      showMoreBtnEl.addEventListener('click', toggleAccordeon);
    }
    if (event.target.classList.contains('js-btn-show-more')) {
      toggleAccordeon();
    }

    if (event.target.classList.contains('js-btn-menu-open')) {
      showMenu(navBlockEl, closeMenuBtnEl);
      overlay.classList.add('show');
     
    }

    if (event.target.classList.contains('js-btn-close')) {
      hideMenu(navBlockEl);
      overlay.classList.remove('show');
    }

    if (event.target.classList.contains('js-overlay')) {
      
       hideMenu(navBlockEl);
    }

    if (event.target.classList.contains('cards__article')) {
    
      showMenu(modal, closeMenuBtnEl);
      document.body.classList.add('no-scroll');
    }

    if (event.target.classList.contains('js-btn-close') ||
        event.target.classList.contains('modal')  ) {
       
      hideMenu(modal);
      document.body.classList.remove('no-scroll');
    
    }
  })
};