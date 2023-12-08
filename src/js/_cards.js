// const cardsContainer = document.querySelector('.js-cards-main-contaier');

// export const createCard = (link, title, subtitle, offers, image, image2) => {
//   const cardTemplate = document.querySelector('#cardMainTemplate');
//   const cloneCardTemplate = cardTemplate.content.cloneNode(true);

//   const cardLink = cloneCardTemplate.querySelector('.js-card-link');
//   const cardTitle = cloneCardTemplate.querySelector('.js-card-title');
//   const cardSubtitle = cloneCardTemplate.querySelector('.js-card-subtitle');
//   const cardOffers = cloneCardTemplate.querySelector('.js-card-offers');
//   const cardSourceMax = cloneCardTemplate.querySelector('.js-card-source-max');
//   const cardSourceMin = cloneCardTemplate.querySelector('.js-card-source-min');
//   const cardImg = cloneCardTemplate.querySelector('.js-card-img');

//   cardLink.setAttribute('href', link);
//   cardSourceMax.setAttribute('srcset', image);
//   cardSourceMin.setAttribute('srcset', image2);
//   cardImg.setAttribute('src', image);
//   cardImg.setAttribute('alt', (title + ' ' + subtitle));
//   cardTitle.innerHTML = title;
//   cardSubtitle.innerHTML = subtitle;
//   cardOffers.innerHTML = offers;

//   return cloneCardTemplate;
// };

// export const renderCardList = (cards) => {
//   for (let item of cards) {
//     const card = createCard(
//      item.link,
//      item.title,
//      item.subtitle,
//      item.offers,
//      item.imageCard.sourceMax767,
//      item.imageCard.sourceMin768,

//    );
//     cardsContainer.append(card);
//   }

//   return cards;
// }
