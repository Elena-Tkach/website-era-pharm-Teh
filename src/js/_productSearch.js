import { indexCards } from './_consts';
import { renderNameSearchList } from './_productList';

//  const productSearh = document.querySelectorAll('.js-product-search-link');
const searchInput = document.querySelector('.js-search');
const searchBtn = document.querySelector('.js-search-btn');
console.log(searchInput.value, searchBtn);

searchInput.addEventListener('input', () => {
  console.log(searchInput.value);
})

const getProductName = (products = []) => {
  let productCardsCopy = [...indexCards];
  for (const items of productCardsCopy) {
    for (const values of items.products) {
     
      products.push(values.title);
    }
  }
   return products;
};

  // const nameProducts = getProductName();


  export const filterProduct = () => {
    
    
    renderNameSearchList(indexCards);
  
  }
    

