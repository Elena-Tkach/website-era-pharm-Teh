const searchInput = document.querySelector('.js-search');
const searchList = document.querySelector('.js-product-search');
const searchItems = Array.from(document.querySelectorAll('.js-search-link'));
const searchDots = document.querySelector('.search__dots');

const textContent = (element, style, text) => {
  if (style) {
    element.style.cssText = `${style}`;
  }
  if (text) {
    element.innerHTML = `${text}`;
  }

  
}
const filterProduct = () => {
  searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase();
    const filteredItems = searchItems.filter((item) => item.textContent.toLowerCase().includes(searchText));
    if (searchText === 0) {
      document.querySelector('.search__dots').innerHTML = 'Ничего не найденно!';
    }
    searchItems.forEach((item) => {
      item.parentElement.style.display = 'none';
    });
    filteredItems.forEach((item) => {
      item.parentElement.style.display = 'list-item';
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

export default filterProduct;
