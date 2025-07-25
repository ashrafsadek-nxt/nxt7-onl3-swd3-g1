
let screenWidth = 0;

const summary = document.querySelector('summary')

const details = document.querySelector('details')

function customLargeScreenNav() {
    summary.classList.add('d-none')
    details.setAttributeNode(document.createAttribute('open'))
}

function customSmallScreenNav() {
    summary.classList.remove('d-none')
    details.removeAttribute('open')
}

function changeNavStyle() {
    screenWidth = window.innerWidth
    if (screenWidth > 768) {
        customLargeScreenNav()
    }
    else {
        customSmallScreenNav()
    }
}

changeNavStyle()

window.addEventListener('resize', changeNavStyle)

const nav = document.querySelector('nav')

let y = 0;

function handleNavColors() {
    y = window.scrollY
    if (y > 0) {
        nav.classList.add('color')
    }
    else if (y === 0) {
        nav.classList.remove('color')
    }
}
handleNavColors()
window.addEventListener('scroll', handleNavColors)

// background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);