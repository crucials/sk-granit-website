import '../../pages/main.html'

window.addEventListener('load', () => {
    import('./main-event-handler')

    const statisticsSection = document.querySelector('.statistics')
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                if(entry.target == statisticsSection) {
                    statisticsSection.querySelectorAll('.statistic').forEach(statistic => {
                        statistic.querySelector('span')?.classList.remove('translate-y-8')
                        statistic.querySelector('p')?.classList.remove('translate-x-10')
                    })

                    observer.unobserve(statisticsSection)
                }
            }
        })
    }, { threshold: 0.4 })
    
    if(statisticsSection) {
        observer.observe(statisticsSection)
    }
})