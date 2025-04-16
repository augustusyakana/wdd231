const basicModal = document.querySelector('.basic-modal');
const basicBtn = document.querySelector('.basic-btn');
const basicCloseBtn = document.querySelector('.basic-close-btn');

const premModal = document.querySelector('.prem-modal');
const premBtn = document.querySelector('.prem-btn');
const premCloseBtn = document.querySelector('.prem-close-btn');

const eliteModal = document.querySelector('.elite-modal');
const eliteBtn = document.querySelector('.elite-btn');
const eliteCloseBtn = document.querySelector('.elite-close-btn');

basicBtn.addEventListener('click', () => {
    basicModal.showModal();
})

basicCloseBtn.addEventListener('click', () => {
    basicModal.close();
})

premBtn.addEventListener('click', () => {
    premModal.showModal();
})

premCloseBtn.addEventListener('click', () => {
    premModal.close();
})

eliteBtn.addEventListener('click', () => {
    eliteModal.showModal();
})

eliteCloseBtn.addEventListener('click', () => {
    eliteModal.close();
})
