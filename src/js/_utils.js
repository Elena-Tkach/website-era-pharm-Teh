export const modal = document.querySelector('.js-modal');
export const navBlockEl = document.querySelector('.js-nav-block');
export const closeMenuBtnEl = document.querySelector('.js-btn-close');
export const popupEl = document.querySelector('.js-popup');

const showMoreBtnEl = document.querySelector('.js-btn-show-more');
const blockMoreEl = document.querySelector('.js-block-more');
const btnHangEl = document.querySelector('.js-btn-hang');
const blockModalHangEl = document.querySelector('.js-modal-list-hang');
const bntAreaEl = document.querySelector('.js-btn-areas');
const blockModalAreasEl = document.querySelector('.js-modal-list-areas');

const toggleAccordeon = (moreBtn, block) => {
  const btn = moreBtn;
  block.classList.toggle('show-slider');

  if (block.classList.contains('show-slider')) {
    block.setAttribute('aria-hidden', 'false');
    btn.setAttribute('aria-label', 'Закрыть блок');
    btn.innerHTML = 'Скрыть блок';
  } else {
    block.setAttribute('aria-hidden', 'true');
    btn.setAttribute('aria-label', 'Показать больше информации');
    btn.innerHTML = 'Больше информации';
  }
};

export const toggleEl = (moreBtn, block) => {
  block.classList.toggle('hide-slider');
  moreBtn.classList.toggle('rotate-btn');

  if (block.classList.contains('hide-slider')) {
    block.setAttribute('aria-hidden', 'true');
    moreBtn.setAttribute('aria-label', 'Показать больше информации');
  } else {
    block.setAttribute('aria-hidden', 'false');
    moreBtn.setAttribute('aria-label', 'Закрыть блок');
  }
};

export const showBlock = (element, closeMenuBtn) => {
  element.classList.add('show');
  element.setAttribute('aria-hidden', 'false');
  if (closeMenuBtn) {
    setTimeout(() => {
      closeMenuBtn.focus();
    }, 100);
  }
};

export const hideBlock = (element) => {
  element.classList.remove('show');
  element.setAttribute('aria-hidden', 'true');
};

export const successSentForm = (popup) => {
  hideBlock(popup);
  document.body.classList.add('no-scroll');
  popup.classList.add('show');
 
};

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

  if (event.target.classList.contains('js-btn-popup-close')) {
    document.body.classList.remove('no-scroll');
    hideBlock(popupEl);
  }
  if (event.target.classList.contains('js-popup')) {
    document.body.classList.remove('no-scroll');
    hideBlock(popupEl);
  }
});
