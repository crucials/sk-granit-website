const thanksPopUp = document.createElement('div')
thanksPopUp.classList.add('thanks-pop-up')
thanksPopUp.innerHTML = `
    <h3 class="text-3xl mb-4 text-center">
        СПАСИБО
    </h3>

    <p class="text-base opacity-50 text-center w-1/3 mx-auto">
        Ожидайте звонка в ближайшее время
    </p>
`

export function showPopUp(popUpContainer : HTMLElement) {
    popUpContainer.insertAdjacentElement('beforeend', thanksPopUp)
    setTimeout(() => {
        thanksPopUp.remove()
    }, 2500)
}