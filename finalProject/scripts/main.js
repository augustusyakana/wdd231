
const now = new Date();
const hamMenu = document.querySelector('.ham-menu');
const offScreen = document.querySelector('.off-screen');

// Ham menu functionality
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreen.classList.toggle('active');
})

// Footer datetime functionality
document.querySelector('#copyright').textContent = now.getFullYear();

