import { modalsContent } from './_consts';
import { modal, navBlockEl, closeMenuBtnEl, showBlock, hideBlock  } from './_utils';
const modalsContentCopy = [...modalsContent];

const updateModalContent = (modalId) => {
  const content = modalsContentCopy.find(modal => modal.id === modalId);

  const modal = document.querySelector('.js-modal');
  const listHang = modal.querySelector('.js-modal-list-hang');
  const listAreas = modal.querySelector('.js-modal-list-areas');

  modal.querySelectorAll('source').forEach((source, index) => {
        source.media = content.sources[index].media;
        source.srcset = content.sources[index].srcset;
    });
    modal.querySelector('.modal__img').src = content.imgSrc;
    modal.querySelector('.modal__img').alt = content.imgAlt;
    modal.querySelector('.modal__title').textContent = content.title;
    modal.querySelector('.modal__text').textContent = content.text;

   
    listHang.innerHTML = '';
    listAreas.innerHTML = '';
    content.listItems1.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = 'modal-body__item';
        listItem.textContent = item;
        listHang.appendChild(listItem);
    });
  
  content.listItems2.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = 'modal-body__item';
        listItem.textContent = item;
        listAreas.appendChild(listItem);
  });

  showBlock(modal, closeMenuBtnEl);
  document.body.classList.add('no-scroll');
}

 
export const modalCardHandler = () => {
  document.body.addEventListener('click', event => { 
    if (event.target.classList.contains('cards__article')) {
      if (navBlockEl) {
        hideBlock(navBlockEl);
      }
      const modalId = event.target.getAttribute('data-modal');
      updateModalContent(modalId);
      
   
    }

    if (event.target.classList.contains('js-btn-modal-close') || event.target.classList.contains('modal')) {
      hideBlock(modal);
      document.body.classList.remove('no-scroll');
    }
  })
  
}