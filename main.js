// Element selectors
const firstNameElement = document.querySelector('#firstName');
const lastNameElement = document.querySelector('#lastName');
const emailElement = document.querySelector('#email');
const dateOfBirthElement = document.querySelector('#dateOfBirth');
const submitButton = document.querySelector('#submitButton');
const cancelButton = document.querySelector('#cancelButton');
const errorMessageElement = document.querySelector('div[data-error-message]')
const successMessageElement = document.querySelector('div[data-success-message]')

// Enums
const EventsEnum = Object.freeze({
  Input: 'input',
  Click: 'click',
  Key: 'keypress'
});

const KeyEnum = Object.freeze({
  Enter: 'Enter',
  ControlShiftX: 20
});

const KeyCodeEnum = Object.freeze({
  ControlShiftX: 24
});

// global variables
let firstName = '';
let lastName = '';
let email = '';
let dateOfBirth = '';

// functions
const setFirstName = (e) => { firstName = e.target.value; };

const setLastName = (e) => { lastName = e.target.value; };

const setEmail = (e) => { email = e.target.value; };

const setDateOfBirth = (e) => { dateOfBirth = e.target.value; };

const isSubmitable = (target) => {
  return target.type === EventsEnum.Click || target.key === KeyEnum.Enter;
};

const isValidEmailAddress = () => {
  return email.includes('@') && email.includes('.co')
};

const isValidForm = () => {
  let isValid = true;

  if (!firstName || firstName === null) {
    showErrorMessage('Please enter first name.', firstNameElement);
    isValid = false;
  }
  else if (!lastName || lastName === null) {
    showErrorMessage('Please enter last name.', lastNameElement);
    isValid = false;
  }
  else if (!email || email === null || !isValidEmailAddress()) {
    showErrorMessage('Please enter a valid email address.', emailElement);
    isValid = false;
  }
  else if (!dateOfBirth || dateOfBirth === null) {
    showErrorMessage('Please enter a valid date of birth.', dateOfBirthElement);
    isValid = false;
  }

  return isValid;
};

const showErrorMessage = (message, element) => {
  errorMessageElement.innerText = message;
  errorMessageElement.style.display = '';
  element.focus();
};

const hideErrorMessage = () => {
  errorMessageElement.innerText = null;
  errorMessageElement.style.display = 'none';
};

const showSuccessMessage = (message) => {
  successMessageElement.innerText = message;
  successMessageElement.style.display = '';
};

const hideSuccessMessage = () => {
  successMessageElement.innerText = null;
  successMessageElement.style.display = 'none';
};

const submitForm = (target) => {
  hideErrorMessage();
  hideSuccessMessage();

  if (isSubmitable(target) && isValidForm()) {
    saveDetails()
    showSuccessMessage(`You're details have been submitted`);
    removeFormFocus();
  }
};

const saveDetails = () => {
  localStorage.setItem('firstName', firstName);
  localStorage.setItem('lastName', lastName);
  localStorage.setItem('email', email);
  localStorage.setItem('dateOfBirth', dateOfBirth);
};

const removeDetails = () => {
  localStorage.removeItem('firstName');
  localStorage.removeItem('lastName');
  localStorage.removeItem('email');
  localStorage.removeItem('dateOfBirth');
  clearForm()
};

const clearForm = () => {
  firstName = '';
  firstNameElement.value = firstName;
  lastName = '';
  lastNameElement.value = lastName;
  email = '';
  emailElement.value = email;
  dateOfBirth = '';
  dateOfBirthElement.value = email;
  firstNameElement.focus();
  hideErrorMessage();
  hideSuccessMessage();
};

const removeFormFocus = () => {
  firstNameElement.blur();
  lastNameElement.blur();
  emailElement.blur();
  dateOfBirthElement.blur();
};

// event listeners
firstNameElement.addEventListener(EventsEnum.Input, setFirstName);
firstNameElement.addEventListener(EventsEnum.Key, submitForm);

lastNameElement.addEventListener(EventsEnum.Input, setLastName);
lastNameElement.addEventListener(EventsEnum.Key, submitForm);

emailElement.addEventListener(EventsEnum.Input, setEmail);
emailElement.addEventListener(EventsEnum.Key, submitForm);

dateOfBirthElement.addEventListener(EventsEnum.Input, setDateOfBirth);
dateOfBirthElement.addEventListener(EventsEnum.Key, submitForm);

cancelButton.addEventListener(EventsEnum.Click, removeDetails);
submitButton.addEventListener(EventsEnum.Click, submitForm);

document.addEventListener(EventsEnum.Key, e => {
  if (e.keyCode === KeyCodeEnum.ControlShiftX) {
     e.preventDefault()
     clearForm()
   }
});

// main
clearForm()