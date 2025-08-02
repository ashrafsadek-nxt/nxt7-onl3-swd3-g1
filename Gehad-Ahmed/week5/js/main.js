let header=document.querySelector(".header")



 
function handleNavColors() {
    y = window.scrollY
    // console.log(window.scrollY);
        console.log("Header:", header);

    
    if (y > 0) {
        header.classList.add('background-nav')
    }
    else if (y === 0) {
        header.classList.remove('background-nav')
    }
}
// window.addEventListener('DOMContentLoaded',handleNavColors)
handleNavColors()
window.addEventListener('scroll', handleNavColors)





let items = document.querySelectorAll('.carousel .carousel-item')

		items.forEach((el) => {
			const minPerSlide = 6
			let next = el.nextElementSibling
			for (var i=1; i<minPerSlide; i++) {
				if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})