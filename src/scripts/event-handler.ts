import { validate } from './form-validator'
import { openNavigation, closeNavigation } from './navigation'
import { toNextSlide, toPreviousSlide, goToSlide } from './slider'

document.querySelector('#openNavigationButton')?.addEventListener('click', () => {
    openNavigation()
})
document.querySelector('#closeNavigationButton')?.addEventListener('click', () => {
    closeNavigation()
})

document.querySelectorAll('.slider').forEach(slider => {
    slider.querySelector('.right-arrow-button')?.addEventListener('click', event => toNextSlide(event))
    slider.querySelector('.left-arrow-button')?.addEventListener('click', event => toPreviousSlide(event))

    const paginationButtons = slider.querySelector('.pagination')?.querySelectorAll('button')
    if(paginationButtons) {
        const paginationButtonsArray = Array.from(paginationButtons)
        paginationButtonsArray.forEach(button => {
            button.addEventListener('click', event => goToSlide(event, paginationButtonsArray.indexOf(button)))
        })
    }
})

const getPriceForm = document.querySelector('.get-price-form') as HTMLFormElement
getPriceForm?.querySelector('#getPriceButton')?.addEventListener('click', () => validate(getPriceForm))

const sendQuestionForm = document.querySelector('.send-question-form') as HTMLFormElement
sendQuestionForm.querySelector('#sendQuestionButton')?.addEventListener('click', () => validate(sendQuestionForm))