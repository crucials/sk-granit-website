const navigation = document.querySelector('.navigation')

export function openNavigation() {
    navigation?.classList.add('navigation-opened')
}

export function closeNavigation() {
    navigation?.classList.remove('navigation-opened')
}