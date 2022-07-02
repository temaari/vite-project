// imports
import { EventsEnum, KeyCodeEnum } from './Utilities/Enums'
import { isSubmitable, isValidEmailAddress } from './Utilities/Common'
import { showErrorMessage, hideErrorMessage, showSuccessMessage, hideSuccessMessage } from './messageBanner'

// Element selectors
const firstNameElement = document.querySelector('#firstName')
const lastNameElement = document.querySelector('#lastName')
const emailElement = document.querySelector('#email')
const dateOfBirthElement = document.querySelector('#dateOfBirth')
const submitButton = document.querySelector('#submitButton')
const cancelButton = document.querySelector('#cancelButton')

// global variables
let firstName = ''
let lastName = ''
let email = ''
let dateOfBirth = ''

// functions
const setFirstName = (e) => { firstName = e.target.value }
const setLastName = (e) => { lastName = e.target.value }
const setEmail = (e) => { email = e.target.value }
const setDateOfBirth = (e) => { dateOfBirth = e.target.value }

const isValidForm = () => {
  let isValid = true

  if (!firstName || firstName === null) {
    showErrorMessage('Please enter first name.', firstNameElement)
    isValid = false
  }
  else if (!lastName || lastName === null) {
    showErrorMessage('Please enter last name.', lastNameElement)
    isValid = false
  }
  else if (!email || email === null || !isValidEmailAddress(email)) {
    showErrorMessage('Please enter a valid email address.', emailElement)
    isValid = false
  }
  else if (!dateOfBirth || dateOfBirth === null) {
    showErrorMessage('Please enter a valid date of birth.', dateOfBirthElement)
    isValid = false
  }

  return isValid
}

const submitForm = (target) => {
  hideErrorMessage()
  hideSuccessMessage()

  if (isSubmitable(target) && isValidForm()) {
    saveDetails()
    showSuccessMessage(`You're details have been submitted`)
    removeFormFocus()
  }
}

const saveDetails = () => {
  localStorage.setItem('firstName', firstName)
  localStorage.setItem('lastName', lastName)
  localStorage.setItem('email', email)
  localStorage.setItem('dateOfBirth', dateOfBirth)
}

const removeDetails = () => {
  localStorage.removeItem('firstName')
  localStorage.removeItem('lastName')
  localStorage.removeItem('email')
  localStorage.removeItem('dateOfBirth')
  clearForm()
}

const clearForm = () => {
  firstName = ''
  firstNameElement.value = firstName
  lastName = ''
  lastNameElement.value = lastName
  email = ''
  emailElement.value = email
  dateOfBirth = ''
  dateOfBirthElement.value = email
  firstNameElement.focus()
  hideErrorMessage()
  hideSuccessMessage()
}

const removeFormFocus = () => {
  firstNameElement.blur()
  lastNameElement.blur()
  emailElement.blur()
  dateOfBirthElement.blur()
}

// event listeners
firstNameElement.addEventListener(EventsEnum.Input, setFirstName)
firstNameElement.addEventListener(EventsEnum.Key, submitForm)

lastNameElement.addEventListener(EventsEnum.Input, setLastName)
lastNameElement.addEventListener(EventsEnum.Key, submitForm)

emailElement.addEventListener(EventsEnum.Input, setEmail)
emailElement.addEventListener(EventsEnum.Key, submitForm)

dateOfBirthElement.addEventListener(EventsEnum.Input, setDateOfBirth)
dateOfBirthElement.addEventListener(EventsEnum.Key, submitForm)

cancelButton.addEventListener(EventsEnum.Click, removeDetails)
submitButton.addEventListener(EventsEnum.Click, submitForm)

document.addEventListener(EventsEnum.Key, e => {
  if (e.keyCode === KeyCodeEnum.ControlShiftX) {
     e.preventDefault()
     clearForm()
   }
})

// main
clearForm()