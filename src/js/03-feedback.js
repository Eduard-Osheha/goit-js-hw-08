import throttle from 'lodash.throttle';

const LOCALE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const email = form[0];
const textarrea = form[1];

const inputValues = {};

form.addEventListener('input', throttle(onInputText, 500));
form.addEventListener('submit', onFormSubmit);

returnSavedValues();

function onInputText(e) {
  e.preventDefault();

  if (e.target.nodeName === 'INPUT') {
    let emailValue = e.target.value;
    inputValues.email = emailValue;
  } else if (e.target.nodeName === 'TEXTAREA') {
    let messageValue = e.target.value;
    inputValues.message = messageValue;
  }
  localStorage.setItem(LOCALE_KEY, JSON.stringify(inputValues));
}

function onFormSubmit(e) {
  e.preventDefault();

  const savedValues = localStorage.getItem(LOCALE_KEY);
  const parseValues = JSON.parse(savedValues);

  if (!savedValues) {
    return;
  }
  console.log('Email: ', parseValues.email);

  if (!savedValues) {
    return;
  }
  console.log('Message: ', parseValues.message);

  e.currentTarget.reset();
  localStorage.removeItem(LOCALE_KEY);
}

function returnSavedValues() {
  const savedValues = localStorage.getItem(LOCALE_KEY);
  const parseValues = JSON.parse(savedValues);

  if (!savedValues) {
    return;
  }
  textarrea.value = parseValues.message;

  if (!savedValues) {
    return;
  }
  email.value = parseValues.email;

  // textarrea.value = parseValues.message.textContent;
}
