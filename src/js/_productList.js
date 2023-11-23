const searchListContainer = document.querySelector('.js-product-search');

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
   console.log(products);
      return products;
  }

  export const removeList = () => {
	return searchListContainer.innerHTML = '';
}

  
