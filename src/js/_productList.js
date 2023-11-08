

const searchListContainer = document.querySelector('.js-product-search');


// const getProductName = (products = []) => {
//   let productCardsCopy = [...indexCards];
//   for (const items of productCardsCopy) {
//     for (const values of items.products) {
//       products.push(values.title);
//     }
//   }
//    return products;
// };


const createProductSearchList = (link, title) => {
  const productSearchTemplate = document.querySelector('#productSearchTemplate');
  const cloneProductSearchTemplate = productSearchTemplate.content.cloneNode(true);
  
  const productLink = cloneProductSearchTemplate.querySelector('.js-product-search-link');
  const productTitle = cloneProductSearchTemplate.querySelector('.js-product-search');

  productLink.setAttribute('href', link);
  productTitle.innerHTML = title;

  return cloneProductSearchTemplate;
};


export const renderNameSearchList = (products) => {
  for (let item of products) {
       for (const value of item.products) {
         const product = createProductSearchList(
           item.link,
           value.title,
           
         );
         searchListContainer.append(product);
      }
   } 
    
    
      return products;
  }

  
