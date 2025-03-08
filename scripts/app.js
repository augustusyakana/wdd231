const hamMenu = document.querySelector('.ham-menu');
const offScreen = document.querySelector('.off-screen');
const certBtns = document.querySelectorAll('.cert-btn');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreen.classList.toggle('active');
})

