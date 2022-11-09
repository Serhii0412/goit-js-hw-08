import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

const lcKey = 'feedback-form-state';
const data = {};

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onSubmit);

onForm();

function onInput(e) {
  data[e.target.name] = e.target.value;
  localStorage.setItem(lcKey, JSON.stringify(data));
}

function onForm() {
  try {
    const saved = JSON.parse(localStorage.getItem(lcKey));
    if (saved) {
      email.value = saved.email || '';
      message.value = saved.message || '';
    }
  } catch (error) {
    console.log(error.email);
    console.log(error.message);
  }
}

function onSubmit(evt) {
  evt.preventDefault();

  if (localStorage.getItem(lcKey)) {
    console.log(JSON.parse(localStorage.getItem(lcKey)));
  }
  evt.target.reset();
  localStorage.removeItem(lcKey);
}
