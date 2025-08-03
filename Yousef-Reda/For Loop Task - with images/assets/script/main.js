const monumentsSection = document.querySelector('.monuments')
let monuments = ''

let images = {
    src1: "assets/images/1.jpg",
    src2: "assets/images/2.jpg",
    src3: "assets/images/3.jpg",
    src4: "assets/images/4.jpg",
    src5: "assets/images/5.jpg",
}

function getItem(src) {
    return (
        `
            <div>
                <figure>
                    <img src=${src} alt="">
                    <figcaption></figcaption>
                </figure>
            </div>
        `
    )
}

for (let i = 0; i < 4; i++) {
    monuments += getItem(images[`src${i + 1}`])
}

monumentsSection.innerHTML = monuments