'use strict;';

import simpleParallax from 'simple-parallax-js';
import { modal } from './_utils';
import modalCardHandler from './modalCard';
import { searchInput, filterProduct } from './_productSearch';
import scroll from './_scroll';
import { form, sendEmail } from './_sendMail';

const image = document.getElementsByClassName('thumbnail');

if (modal) {
  modalCardHandler();
}

if (searchInput) {
  filterProduct();
}
scroll();

if (form) {
  sendEmail();
}
const year = new Date().getFullYear();
document.querySelector('.year').textContent = year;

if (image) {
  new simpleParallax(image, {
    scale: 1.2,
    delay: 0.6,
    transition: 'linear',
  });
}

