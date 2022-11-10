import { validate } from "../form-validator"

const orderCallWindow = document.querySelector('.order-call-window') as HTMLDialogElement
const windowBackdrop = document.querySelector('.order-call-window-backdrop') as HTMLDivElement
const orderCallForm = orderCallWindow.querySelector('form')

const dataProcessingConsentButton = document.querySelector('#dataProcessingConsentButton') as HTMLInputElement
const textFields = orderCallWindow.querySelectorAll('input[type="text"], input[type="tel"], textarea')
const errorText = document.querySelector('.order-call-error-text')

export function openOrderCallWindow() {
    orderCallWindow.open = true
    windowBackdrop.classList.add('backdrop-visible')
}

export function closeOrderCallWindow() {
    errorText?.classList.remove('order-call-error-text-visible')
    orderCallWindow.open = false
    setTimeout(() => {
        windowBackdrop.classList.remove('backdrop-visible')
    }, 600)
}

export function sendCallRequest() {
    if(orderCallForm) {
        validate(orderCallForm)
    }
}