import { successSentForm, popupEl } from './_utils';

export const form = document.querySelectorAll('.js-form');
const linkSendLightForm = './inc/senmail.php';

export const sendEmail = () => {
  form.forEach(formItem => {
    formItem.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formdata = new FormData(formItem);
      const option = {
        method: 'POST',
        body: formdata,
      };
      const result = await fetch(linkSendLightForm, option);

      setTimeout(() => {
        successSentForm(popupEl);
        formItem.reset();
      }, 500);

      if (result) {
        console.log('ok');
      } else {
        console.log('no');
      }
    });
  });
};
