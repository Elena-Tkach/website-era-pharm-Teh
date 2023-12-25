import {successSentForm, popupEl} from './_utils';

const form = document.querySelectorAll('.js-form');
const linkSendLightForm = './inc/send_form_light.php';

const sendEmail = () => {
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
        console.log('yes');
      } else {
        console.log('no');
      }
    });
});
};

export default sendEmail;