// const container = document.querySelector('.discover-container');
let url3 = 'data/pohnpei.json';

async function getPohnpeiData() {
    const response = await fetch(url3);
    const data = await response.json();
    console.log(data);
}

const displaySites = (sites) => {
    sites.forEach(site => {

    })
}

getPohnpeiData();