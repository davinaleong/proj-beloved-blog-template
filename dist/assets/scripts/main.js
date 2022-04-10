const toggle = document.querySelector('.btn-collapse')
const mainNav = document.querySelector(".main-nav")
const activeClass = 'active';

toggle.addEventListener('click', () => {
    mainNav.classList.toggle(activeClass)
})

window.onresize(() => {
    if (window.innerWidth >= 768) {
        mainNav.classList.remove(activeClass)
    }
})

const body = document.querySelector("body")
const mainHeader = document.querySelector(".main-header")
const mainFooter = document.querySelector(".main-footer")
body.style.paddingTop = mainHeader.clientHeight
body.style.paddingBottom = mainFooter.clientHeight