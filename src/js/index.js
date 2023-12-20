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
import simpleParallax from 'simple-parallax-js';


if (modal) {
  modalCardHandler();
}

if (searchInput) {
  filterProduct();
}

scroll();
const image = document.getElementsByClassName('thumbnail');
if (image) {
  new simpleParallax(image, {
	scale: 1.2,
    delay: .6,
    transition: 'linear',
});

}


// const year = new Date().getFullYear();
// document.querySelector('.year').textContent = year;