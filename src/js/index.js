'use strict;';

import {
  modal,
  navBlockEl,
  closeMenuBtnEl,
  toggleAccordeon,
  toggleEl,
  showBlock,
  hideBlock,
} from './_utils';
import modalCardHandler from './modalCard';
import { searchInput, filterProduct } from './_productSearch';
import scroll from './_scroll';

const showMoreBtnEl = document.querySelector('.js-btn-show-more');

const blockMoreEl = document.querySelector('.js-block-more');
const btnHangEl = document.querySelector('.js-btn-hang');
const blockModalHangEl = document.querySelector('.js-modal-list-hang');
const bntAreaEl = document.querySelector('.js-btn-areas');
const blockModalAreasEl = document.querySelector('.js-modal-list-areas');

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

  if (event.target.classList.contains('js-btn-hang')) {
    toggleEl(btnHangEl, blockModalHangEl);
  }
  if (event.target.classList.contains('js-btn-areas')) {
    toggleEl(bntAreaEl, blockModalAreasEl);
  }

  if (event.target.classList.contains('js-btn-menu-open')) {
    showBlock(navBlockEl, closeMenuBtnEl);
  }

  if (event.target.classList.contains('js-btn-close')) {
    hideBlock(navBlockEl);
  }
});
