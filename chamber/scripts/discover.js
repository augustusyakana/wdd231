const discoverCards = document.querySelector('.discover-cards');
let url3 = 'data/pohnpei.json';
const modal = document.querySelector('.modal')
const lastvisitP = document.querySelector('.last-visit');

const lastVClose = document.querySelector('.last-v-close');

lastVClose.addEventListener('click', () => {
    document.querySelector('.last-visit-container').classList.remove('show');
    document.querySelector('.last-visit-container').classList.add('hide');
})

const now = new Date();
const lastVisit = localStorage.getItem('lastVisit');

if (lastVisit) {
    const lastVisitDate = new Date(lastVisit);
    const difference = now - lastVisitDate;

    if (difference < 1000 * 60 * 60 * 24) {
        lastvisitP.textContent = "Back so soon! Awesome!"
    } else {
        const numDays = Math.floor(difference / (1000 * 60 * 60 * 24));
        lastvisitP.textContent = `You last visited ${numDays} ago.`;
    }
} else {
    lastvisitP.textContent = "Welcome! Let us know if you have any questions."
}

localStorage.setItem('lastVisit', now.toISOString());


async function getPohnpeiData() {
    const response = await fetch(url3);
    const sites = await response.json();
    displaySites(sites);
}

getPohnpeiData();


const displaySites = (sites) => {
    sites.forEach(site => {

        const linktag = document.createElement('a');
        linktag.setAttribute('href', site.link);
        linktag.setAttribute('target', '_blank');
        linktag.setAttribute('class', 'site-link')

        const discovercard = document.createElement('div');
        discovercard.setAttribute('class', 'discover-card')

        const discovertitle = document.createElement('h2');
        discovertitle.textContent = site.title;
        discovertitle.setAttribute('class', 'discover-title');

        const discoverfigure = document.createElement('figure');
        discoverfigure.setAttribute('class', 'discover-fig');

        const discoverimage = document.createElement('img');
        discoverimage.setAttribute('src', site.imgUrl);
        discoverimage.setAttribute('alt', `photo of ${site.title}`);
        discoverimage.setAttribute('loading', 'lazy');
        discoverimage.setAttribute('class', 'discover-img');

        const discoverfigcap = document.createElement('figcaption');
        discoverfigcap.textContent = `Photo of ${site.title}`;
        discoverfigcap.setAttribute('class', 'discover-figcap')

        discoverfigure.appendChild(discoverimage);
        discoverfigure.appendChild(discoverfigcap);

        const discoveraddress = document.createElement('address');
        discoveraddress.textContent = site.address;
        discoveraddress.setAttribute('class', 'discover-address');

        const discoverModal = document.createElement('dialog');
        discoverModal.setAttribute('class', 'modal');

        const discoverdescription = document.createElement('p');
        discoverdescription.textContent = site.discription;

        const discoverspan = document.createElement('span');
        discoverspan.setAttribute('class', 'close');
        discoverspan.textContent = "X";

        discoverModal.append(discoverspan);
        discoverModal.appendChild(discoverdescription);

        const discoverbtn = document.createElement('button');
        discoverbtn.textContent = "Learn More";
        discoverbtn.setAttribute('class', 'discover-btn')

        discovercard.append(discoverModal);
        discovercard.append(discovertitle);
        linktag.append(discoverfigure);
        discovercard.append(linktag)
        discovercard.append(discoveraddress);
        discovercard.append(discoverbtn);

        discoverCards.append(discovercard);

        discoverbtn.addEventListener('click', () => {
            discoverModal.showModal();
        })

        discoverspan.addEventListener('click', () => {
            discoverModal.close();
        })

    })
}




