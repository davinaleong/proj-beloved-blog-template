window.onload(() => {
    const toggle = document.querySelector('button[data-toggle="menu"] img')
    const mainHeader = document.querySelector(".main-header")
    const activeClass = 'active';

    toggle.addEventListener('click', () => {
        console.log('Toggle clicked')
        mainHeader.classList.toggle(activeClass)
    })

    window.onresize(() => {
        if (window.innerWidth >= 768) {
            mainHeader.classList.remove(activeClass)
        }
    })

    const body = document.querySelector("body")
    const mainFooter = document.querySelector(".main-footer")
    body.style.paddingTop = mainHeader.clientHeight
    body.style.paddingBottom = mainFooter.clientHeight
})