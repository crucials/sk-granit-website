import { showPopUp } from "./thanks-pop-up"

export function validate(form : HTMLFormElement, callback? : (valid : boolean) => void) {
    const fields = form.querySelectorAll('input[type="text"], input[type="tel"], input[type="number"], textarea')
    const dataProcessingConsentButton = form.querySelector('.data-processing-consent-button') as HTMLInputElement
    const errorText = form.querySelector('.error-text')

    let allFieldsFilled = true
    fields.forEach(field => {
        if((field as HTMLInputElement).value.trim().length <= 0) {
            allFieldsFilled = false
        }
    })

    if(errorText) {
        if(allFieldsFilled) {
            if(dataProcessingConsentButton.checked) {
                const popUpContainer = form.querySelector('.relative')
                if(popUpContainer) {
                    showPopUp(popUpContainer as HTMLElement)
                    errorText.classList.remove('error-text-visible')
                }

                if(callback) {
                    callback(true)
                }
            }
            else {
                errorText.textContent = 'Пожалуйста, подтвердите свое согласие на обработку персональных данных'
                errorText.classList.add('error-text-visible')

                if(callback) {
                    callback(false)
                }
            }
        }
        else {
            errorText.textContent = 'Пожалуйста, заполните все поля'
            errorText.classList.add('error-text-visible')

            if(callback) {
                callback(false)
            }
        }
    }
}