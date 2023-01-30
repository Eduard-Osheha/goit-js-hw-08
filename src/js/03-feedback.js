import throttle from "lodash.throttle";

const email = document.getElementsByName('email');



// const email = document.querySelector('.feedback-form input');
// const textarea = document.querySelector('.feedback-form textarea');

// const STORAGE_KEY = 'feedback-form-state';

// const formData = {
//   email: form[0],
//   texarea: form[1],
// };
// console.dir(form[0]);
// form.addEventListener("submit", onFormSubmit)

// form.addEventListener('input', throttle(onFormInput, 1000));



// function onFormSubmit(e) {
//     e.preventDefault();
    
//     e.currentTarget.reset()
//     localStorage.removeItem(STORAGE_KEY);
// }

// function onFormInput(e) {
//   const message = e.target.value;
//   localStorage.setItem(STORAGE_KEY, message);
// }

// function onTextareaInput(e) {
//     const message = e.target.value;
//             localStorage.setItem(STORAGE_KEY, message);
// }

// function textareaSavedMessage (){
//     const messageFromStorage = localStorage.getItem(STORAGE_KEY);
// if(messageFromStorage) {
//     console.log(messageFromStorage)
//     textarea.value = messageFromStorage;
//     }
// }

// textareaSavedMessage();