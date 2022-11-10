import { switchTab } from './tabs'

document.querySelectorAll('.tab-button').forEach(tabButton => {
    tabButton.addEventListener('click', event => switchTab(event))
})