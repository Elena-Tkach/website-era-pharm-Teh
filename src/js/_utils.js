export const showBlock = () => {
  let previousActiveElement;
  const modal = document.querySelector('.js-modal');
  const showMoreBtnEl = document.querySelector('.js-btn-show-more');
  const blockMoreEl = document.querySelector('.js-block-more');
  const navBlockEl = document.querySelector('.js-nav-block');
  const closeMenuBtnEl = document.querySelector('.js-btn-close');
  const listIconst = document.querySelectorAll('.js-btn-icon');
  const cardContainer = document.querySelector('.js-cards-contaier');
  const overlay = document.querySelector('.js-overlay');


  const toggleAccordeon = (moreBtn, block) => {
    block.classList.toggle('show-slider');
    console.log(block);
   
    
    
    if (block.classList.contains('show-slider')) {
      block.setAttribute('aria-hidden', 'false');
      moreBtn.setAttribute('aria-label', 'Закрыть блок');
      moreBtn.innerHTML = 'Скрыть блок';
    }
    if (!block.classList.contains('show-slider')) {
      block.setAttribute('aria-hidden', 'true');
      moreBtn.setAttribute('aria-label', 'Показать больше информации');
      moreBtn.innerHTML = 'Больше информации';
    }
    
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

  const desactiveBtn = (list) => {
    console.log(list);
    list.forEach(item => {
      item.classList.remove('selected');
    });
  }

  document.body.addEventListener('click', event => {
    
    if (event.target.classList.contains('js-btn-show-more')) {
      toggleAccordeon(showMoreBtnEl, blockMoreEl);
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

    if (event.target.classList.contains('btn--icons-list')) {
        desactiveBtn(listIconst);
      event.target.classList.add('selected');
      cardContainer.classList.add('card-list');
    }

    if (event.target.classList.contains('btn--icons-cards')) {
      desactiveBtn(listIconst);
      event.target.classList.add('selected');
       cardContainer.classList.remove('card-list');
    }
  })
};