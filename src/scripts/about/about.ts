window.addEventListener('load', () => {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const targetElement = entry.target
                if(targetElement.classList.contains('merit')) {
                    targetElement.querySelector('img')?.classList.remove('scale-0')
                    observer.unobserve(targetElement)
                }
            }
        })
    }, { threshold: 0.5 })
    document.querySelectorAll('.merit').forEach(merit => {
        observer.observe(merit)
    })
})