const copyDate = document.querySelector('#copyright');
const lastUpdate = document.querySelector('#last-update');

const date = new Date();
let currentYear = date.getFullYear();

copyDate.textContent = currentYear;

lastUpdate.textContent = document.lastModified;