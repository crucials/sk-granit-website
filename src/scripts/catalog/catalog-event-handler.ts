import { chooseItem, closeAllChoiceBoxes, closeChoiceBox, openChoiceBox } from './choice-box'

document.addEventListener('click', event => {
    const clickedElement = event.target as Element
    if(!clickedElement.classList.contains('choice-box')) {
        closeAllChoiceBoxes()
    }
})

document.querySelectorAll('.choice-box').forEach(choiceBox => {
    choiceBox.addEventListener('click', event => {
        event.stopPropagation()
        if(choiceBox.classList.contains('choice-box-opened')) {
            closeChoiceBox(event)
        }
        else if(!choiceBox.classList.contains('choice-box-opened')) {
            openChoiceBox(event)
        }
    })
})

document.querySelectorAll('.choice-box-items').forEach(items => {
    items.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', event => chooseItem(event))
    })
})