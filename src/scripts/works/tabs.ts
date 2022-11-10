const selectIndicator = document.querySelector('.select-indicator') as HTMLElement

export function switchTab(event : Event) {
    const tabButton = event.currentTarget as HTMLButtonElement

    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('tab-button-selected')    
    })

    tabButton.classList.add('tab-button-selected')

    document.querySelectorAll('.tab').forEach(tab => {
        (tab as HTMLElement).hidden = true
        console.log(tab)
    })

    let tabToShow : Element | null | undefined
    if(tabButton.classList.contains('extract-tab-button')) {
        tabToShow = document.querySelector('.extract-tab')
        selectIndicator.style.borderTopLeftRadius = '9999px'
        selectIndicator.style.borderBottomRightRadius = '0px'
    }
    else if(tabButton.classList.contains('diving-tab-button')) {
        tabToShow = document.querySelector('.diving-tab')
        selectIndicator.style.borderTopLeftRadius = '0px'
        selectIndicator.style.borderBottomRightRadius = '9999px'
    }

    if(tabToShow) {
        (tabToShow as HTMLElement).hidden = false
    }

    selectIndicator.style.left = `${tabButton.offsetLeft}px`
}