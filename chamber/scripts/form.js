

const npbtn = document.querySelector('.npbtn');
const npmodal = document.querySelector('.npmodal')
const npclose = document.querySelector('.npclose')

const bronzebtn = document.querySelector('.bronzebtn')
const bronzemodal = document.querySelector('.bronzemodal')
const bronzeclose = document.querySelector('.bronzeclose')

const silverbtn = document.querySelector('.silverbtn')
const silvermodal = document.querySelector('.silvermodal')
const silverclose = document.querySelector('.silverclose')

const goldbtn = document.querySelector('.goldbtn')
const goldmodal = document.querySelector('.goldmodal')
const goldclose = document.querySelector('.goldclose')

npbtn.addEventListener('click', () => {
    npmodal.showModal();
})

npclose.addEventListener('click', () => {
    npmodal.close();
})

bronzebtn.addEventListener('click', () => {
    bronzemodal.showModal();
})

bronzeclose.addEventListener('click', () => {
    bronzemodal.close();
})

silverbtn.addEventListener('click', () => {
    silvermodal.showModal();
})

silverclose.addEventListener('click', () => {
    silvermodal.close();
})

goldbtn.addEventListener('click', () => {
    goldmodal.showModal();
})

goldclose.addEventListener('click', () => {
    goldmodal.close();
})


