export const searchInput = document.querySelector('.js-search');
const searchList = document.querySelector('.js-product-search');
const searchItems = Array.from(document.querySelectorAll('.js-search-link'));
const searchDots = document.querySelector('.search__dots');

const textContent = (el, style, text) => {
  const tag = el;
  if (style) {
    tag.style.cssText = `${style}`;
  }
  if (text) {
    tag.innerHTML = `${text}`;
  }
};
export const filterProduct = () => {
  searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase();
    const filteredItems = searchItems.filter(
      (item) => item.textContent.toLowerCase().includes(searchText)
    );
    if (searchText === 0) {
      document.querySelector('.search__dots').innerHTML = 'Ничего не найденно!';
    }
    searchItems.forEach((el) => {
      const item = el;
      item.parentElement.style.display = 'none';
    });
    filteredItems.forEach((el) => {
      const filteritem = el;
      filteritem.parentElement.style.display = 'list-item';
    });

    if (filteredItems.length > 2) {
      searchList.classList.add('scrolling');
      textContent(searchDots, 'visibility: hidden; opacity: 0; transition: 0.6s;');
    } else {
      searchList.classList.remove('scrolling');
      textContent(searchDots, 'visibility: visible; opacity: 1;transition: 0.6s;', '...');
    }

    if (filteredItems.length < 1) {
      textContent(searchDots, 'visibility: visible; opacity: 1; color: blue;', 'Ничего не найденно!');
    }

    if (searchText.length === 0) {
      textContent(searchDots, 'visibility: visible; opacity: 1; transition: 0.6s;', '...');
      searchList.classList.remove('scrolling');
    }
  });
};
