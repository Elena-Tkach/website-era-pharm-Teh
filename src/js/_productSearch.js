import { hideBlock, showBlock } from './_utils';

export const searchInput = document.querySelector('.js-search');
const searchList = document.querySelector('.js-product-search');
const searchItems = Array.from(document.querySelectorAll('.js-search-link'));
const searchMoreBtn = document.querySelector('.js-search-more');
const textError = document.querySelector('.js-text-error');

export const filterProduct = () => {
  searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase();
    const filteredItems = searchItems.filter(
      (item) => item.textContent.toLowerCase().includes(searchText)
    );
    searchItems.forEach((el) => {
      const item = el;
      item.parentElement.style.display = 'none';
    });
    filteredItems.forEach((el) => {
      const filteritem = el;
      filteritem.parentElement.style.display = 'list-item';
    });

    if (searchText === 0) {
      showBlock(textError);
    } else {
      hideBlock(textError);
    }

    if (filteredItems.length >= 2) {
      searchList.classList.add('scrolling');
      searchMoreBtn.classList.add('rotate-btn-i');
    } else {
      searchList.classList.remove('scrolling');
      searchMoreBtn.classList.remove('rotate-btn-i');
    }

    if (filteredItems.length < 1) {
      showBlock(textError);
      searchMoreBtn.classList.add('hidden');
    } else {
      searchMoreBtn.classList.remove('hidden');
    }
  });

  searchMoreBtn.addEventListener('click', () => {
    searchList.classList.toggle('scrolling');
    searchMoreBtn.classList.toggle('rotate-btn-i');
  });
};
