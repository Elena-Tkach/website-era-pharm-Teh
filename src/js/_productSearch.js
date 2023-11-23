import { indexCards } from './_consts';
import { renderNameSearchList, removeList } from './_productList';


//  const productSearh = document.querySelectorAll('.js-product-search-link');
const searchInput = document.querySelector('.js-search');
// const searchBtn = document.querySelector('.js-search-btn');
 let productCardsCopy = [...indexCards];

// const filteringCardsByTags = (target, cards) => {
//   // return cards.filter(({ tags: arr }) => arr.some(tag => target.includes(tag)));
//   return cards.filter(({card: arr}) => arr.some(tag => card.includes(target));
// };
const filter = (list, value) => {
  // return list.filter(({ tags: arr }) => arr.some(tag => value.includes(tag)));
return list.filter(item => item.title.toLowerCase().includes(value));
};

// const getProductName = (products = []) => {

//   for (const items of productCardsCopy) {
//     for (const values of items.products) {
     
//       products.push(values.title);
//     }
//   }
//    return products;
// };

  // const nameProducts = getProductName();




  export const filterProduct = () => {
    renderNameSearchList(productCardsCopy);
    
    searchInput.addEventListener('input', () => {
      const searchValue = searchInput.value.toLowerCase();
      

    for (const items of productCardsCopy) {
      const fil = filter(items.products, searchValue);
        if ( fil.length != 0) {
           
           renderNameSearchList(productCardsCopy);
           removeList();
        } else {
             removeList();
          return console.log('ничего  не найдено')
        }
      }
      
    
    })
  
  }
    

