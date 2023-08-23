(() => {
    document.querySelectorAll('fi').map((el) => {
        el.addEventListener('mouseenter', (evt) => {
            if (evt.target === el) {
                for (const child of el.children) {
                    el.child.classList.add('extended')
                }
            }
        })
    })
})()