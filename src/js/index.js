'use strict;';

// import { indexCards } from './_consts';
import {
  modal,
  navBlockEl,
  closeMenuBtnEl,
  toggleAccordeon,
  showBlock,
  hideBlock,
} from './_utils';
import modalCardHandler from './modalCard';
import { searchInput, filterProduct } from './_productSearch';
import scroll from './_scroll';

const showMoreBtnEl = document.querySelector('.js-btn-show-more');
const blockMoreEl = document.querySelector('.js-block-more');


if (modal) {
  modalCardHandler();
}

if (searchInput) {
  filterProduct();
}

scroll();

document.body.addEventListener('click', (event) => {
  if (event.target.classList.contains('js-btn-show-more')) {
    toggleAccordeon(showMoreBtnEl, blockMoreEl);
  }

  if (event.target.classList.contains('js-btn-menu-open')) {
    showBlock(navBlockEl, closeMenuBtnEl);
  }

  if (event.target.classList.contains('js-btn-close')) {
    hideBlock(navBlockEl);
  }
});
