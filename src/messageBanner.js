
const errorMessageElement = document.querySelector('div[data-error-message]')
const successMessageElement = document.querySelector('div[data-success-message]')

export const showErrorMessage = (message, element) => {
    errorMessageElement.innerText = message
    errorMessageElement.style.display = ''
    element.focus()
}

export const hideErrorMessage = () => {
    errorMessageElement.innerText = null
    errorMessageElement.style.display = 'none'
}

export const showSuccessMessage = (message) => {
    successMessageElement.innerText = message
    successMessageElement.style.display = ''
}

export const hideSuccessMessage = () => {
    successMessageElement.innerText = null
    successMessageElement.style.display = 'none'
}