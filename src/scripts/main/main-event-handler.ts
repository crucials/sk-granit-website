import { validate } from '../form-validator'
import { closeOrderCallWindow, openOrderCallWindow, sendCallRequest } from './order-call-window'

document.querySelector('#orderCallButton')?.addEventListener('click', openOrderCallWindow)
document.querySelector('.order-call-window-backdrop')?.addEventListener('click', closeOrderCallWindow)
document.querySelector('#closeOrderCallWindowButton')?.addEventListener('click', closeOrderCallWindow)
document.querySelector('#sendCallRequestButton')?.addEventListener('click', sendCallRequest)

const spoilers = document.querySelectorAll('.spoiler') as NodeListOf<HTMLDetailsElement>
spoilers.forEach(spoiler => {
    spoiler.addEventListener('click', () => {
        if(spoiler.open == false) {       
            spoilers.forEach(spoilerToClose => {
                if(spoilerToClose != spoiler) {
                    spoilerToClose.open = false
                }
            })
        }
    })
})