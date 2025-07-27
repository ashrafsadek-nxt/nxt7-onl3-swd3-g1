const slider = document.querySelector('.slider .pics');
const sliderNav = document.querySelectorAll('.slider nav button');
sliderNav.forEach((button) => {
    button.addEventListener('click', () => {
        const sliderWidth = slider.clientWidth / 3;
        console.log(sliderWidth, parseInt(button.id));
        slider.style.transform = "translateX(-" + sliderWidth * (parseInt(button.id)-1) + "px)";
    });
});
const sidebarToggle = document.querySelector('.toggle-sidebar');
const sidebar = document.querySelector('.sidebar');

sidebarToggle.addEventListener('click', () => {
    sidebar.style.left = sidebar.style.left === '0px' ? '-30vw' : '0px';
    sidebarToggle.style.left = sidebar.style.left === '0px' ? '30vw' : '0px';
});