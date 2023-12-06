'use strict;'
// import { filterFunction } from './_search';
import { indexCards } from './_consts';
import { modal, navBlockEl, closeMenuBtnEl, toggleAccordeon, showBlock, hideBlock  } from './_utils';
import { searchListContainer, renderNameSearchList } from './_productList';
import { modalCardHandler } from './modalCard';
// import { renderCardList } from './_cards';
// import { filterProduct } from './_productSearch';

  // let previousActiveElement;

const showMoreBtnEl = document.querySelector('.js-btn-show-more');
const blockMoreEl = document.querySelector('.js-block-more');


//  showBlock(); 
// renderCardList(indexCards);
// filterProduct()
if (searchListContainer) {
  renderNameSearchList(indexCards);
}
if (modal) {
 modalCardHandler();
}


 document.body.addEventListener('click', event => {
    
    if (event.target.classList.contains('js-btn-show-more')) {
      toggleAccordeon(showMoreBtnEl, blockMoreEl);
    }

    if (event.target.classList.contains('js-btn-menu-open')) {
      showBlock(navBlockEl, closeMenuBtnEl);
     
    }

    if (event.target.classList.contains('js-btn-close')) {
      hideBlock(navBlockEl);
      
    }

    // if (event.target.classList.contains('cards__article')) {
    //   if (navBlockEl) {
    //     hideMenu(navBlockEl);
    //   }
      
    //   showMenu(modal, closeMenuBtnEl);
    //   document.body.classList.add('no-scroll');
    // }

    // if (event.target.classList.contains('js-btn-modal-close') || event.target.classList.contains('modal')) {
    //   hideMenu(modal);
    //   document.body.classList.remove('no-scroll');
    // }
  })