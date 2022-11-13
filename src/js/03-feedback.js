import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

const lcKey = 'feedback-form-state';
const data = {};

form.addEventListener(
  'input',
  throttle(el => {
    el = { email: email.value, message: message.value };
    localStorage.setItem(lcKey, JSON.stringify(el));
  }, 500)
);
form.addEventListener('submit', onSubmit);

onForm();

function onSubmit(evt) {
  evt.preventDefault();

  console.log(JSON.parse(localStorage.getItem(lcKey)));

  form.reset();
  localStorage.removeItem(lcKey);
}

function onForm() {
  try {
    const saved = JSON.parse(localStorage.getItem(lcKey)) || {};
    if (saved) {
      email.value = saved.email || '';
      message.value = saved.message || '';
    }
  } catch (error) {
    console.error('Erroe eMail', error.email);
    console.error('Error message', error.message);
  }
}
