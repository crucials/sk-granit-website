export function openChoiceBox(event : Event) {
    (event.currentTarget as HTMLElement).classList.add('choice-box-opened')
    console.log();
    
}

export function closeChoiceBox(event : Event) {
    (event.currentTarget as HTMLElement).classList.remove('choice-box-opened')
}

export function closeAllChoiceBoxes() {
    document.querySelectorAll('.choice-box').forEach(choiceBox => {
        choiceBox.classList.remove('choice-box-opened')
    })
}

export function chooseItem(event : Event) {
    event.stopPropagation()
    const chosenItem = event.target as HTMLElement
    const choiceBox = chosenItem.parentElement?.parentElement
    const choiceBoxValue = choiceBox?.querySelector('.choice-box-value')
    choiceBox?.classList.add('choice-box-chosen')

    if(choiceBoxValue) {
        choiceBoxValue.textContent = chosenItem.textContent
    }

    choiceBox?.classList.remove('choice-box-opened')
    console.log(choiceBox?.classList)
}