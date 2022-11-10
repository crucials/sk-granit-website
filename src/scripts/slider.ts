export function toNextSlide(event : Event) {
    const rightArrowButton = event.currentTarget as HTMLButtonElement
    const slider = rightArrowButton.parentElement?.parentElement
    const slides = slider?.querySelectorAll('.slide')

    if(slides) {
        const slidesArray = Array.from(slides)
        const nextSlideIndex = slidesArray.indexOf(slidesArray
            .filter(slide => slide.getAttribute('hidden') == null)[0]) + 1

        slidesArray.forEach(slide => {
            const slideElement = slide as HTMLElement
            if(slidesArray.indexOf(slide) == nextSlideIndex) {
                slideElement.hidden = false
            }
            else {
                slideElement.hidden = true
            }
        }) 

        disableButtonsIfNeeded(nextSlideIndex, slidesArray.length - 1, rightArrowButton, 
            slider?.querySelector('.left-arrow-button') as HTMLButtonElement)
        changePaginationButton(nextSlideIndex, slider?.querySelector('.pagination') as HTMLElement)
    }
}

export function toPreviousSlide(event : Event) {
    const leftArrowButton = event.currentTarget as HTMLButtonElement
    const slider = leftArrowButton.parentElement?.parentElement
    const slides = slider?.querySelectorAll('.slide')

    if(slides) {
        const slidesArray = Array.from(slides)
        const previousSlideIndex = slidesArray.indexOf(slidesArray
            .filter(slide => slide.getAttribute('hidden') == null)[0]) - 1

        slidesArray.forEach(slide => {
            const slideElement = slide as HTMLElement
            if(slidesArray.indexOf(slide) == previousSlideIndex) {
                slideElement.hidden = false
            }
            else {
                slideElement.hidden = true
            }
        }) 

        disableButtonsIfNeeded(previousSlideIndex, slidesArray.length - 1, 
            slider?.querySelector('.right-arrow-button') as HTMLButtonElement, leftArrowButton)
        changePaginationButton(previousSlideIndex, slider?.querySelector('.pagination') as HTMLElement)
    }
}

export function goToSlide(event : Event, slideNumber : number) {
    const paginationButton = event.target as HTMLButtonElement
    const pagination = paginationButton.parentElement
    const slider = pagination?.parentElement
    const slides = slider?.querySelectorAll('.slide')

    if(slides) {
        const slidesArray = Array.from(slides)

        slidesArray.forEach(slide => {
            const slideElement = slide as HTMLElement
            if(slidesArray.indexOf(slide) == slideNumber) {
                slideElement.hidden = false
            }
            else {
                slideElement.hidden = true
            }
        })

        disableButtonsIfNeeded(slideNumber, slidesArray.length - 1, 
            slider?.querySelector('.right-arrow-button') as HTMLButtonElement,
            slider?.querySelector('.left-arrow-button') as HTMLButtonElement)

        if(pagination) {
            changePaginationButton(slideNumber, pagination)
        }
    }
}

function disableButtonsIfNeeded(currentSlideIndex : number, slidesCount : number, rightArrowButton : HTMLButtonElement,
    leftArrowButton : HTMLButtonElement) {

    if(currentSlideIndex >= slidesCount) {
        rightArrowButton.disabled = true
    }
    else {
        rightArrowButton.disabled = false
    }

    if(currentSlideIndex <= 0) {
        leftArrowButton.disabled = true
    }
    else {
        leftArrowButton.disabled = false
    }
}

function changePaginationButton(buttonNumber : number, pagination : HTMLElement) {
    const paginationButtons = pagination?.querySelectorAll('button')
    if(paginationButtons) {
        const buttonsArray = Array.from(paginationButtons)

        buttonsArray.forEach(button => {
            if(buttonsArray.indexOf(button) == buttonNumber) {
                button.classList.remove('opacity-50')
            }
            else {
                button.classList.add('opacity-50')
            }
        })
    }
}