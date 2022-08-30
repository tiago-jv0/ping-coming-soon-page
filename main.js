const inputElement = document.querySelector('.hero__input')
const inputErrorElement = document.querySelector('.hero__input-error')
const subscribeButtonElement = document.querySelector('.hero__button')

inputElement.addEventListener('focus', () => {
    inputElement.classList.remove('hero__input--error')
    inputErrorElement.textContent = ''
    inputErrorElement.classList.remove('hero__input-error--visible')
})


const handleSubscribe = () => {
    const isEmpty = inputElement.value.trim() === ''
    if(isEmpty){
        inputElement.classList.add('hero__input--error')
        inputErrorElement.textContent = 'Please provide a valid email address'
        inputErrorElement.classList.add('hero__input-error--visible')

        return
    }
}

subscribeButtonElement.addEventListener('click', handleSubscribe)