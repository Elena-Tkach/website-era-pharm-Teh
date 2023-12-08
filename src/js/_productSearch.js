const searchInput = document.querySelector('.js-search');
const searchList = document.querySelector('.js-product-search');
const searchItems = Array.from(document.querySelectorAll('.js-search-link'));

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
      document.querySelector('.search__dots').style.cssText = 'visibility: hidden; opacity: 0; transition: 0.6s';
    } else {
      searchList.classList.remove('scrolling');
    }

    if (filteredItems.length < 1) {
      document.querySelector('.search__dots').style.cssText = 'visibility: visible; opacity: 1; color: blue; font-size: 12px';
      document.querySelector('.search__dots').innerHTML = 'Ничего не найденно!';
    }

    if (searchText.length === 0) {
      searchList.classList.remove('scrolling');
    }
  });
};

export default filterProduct;
