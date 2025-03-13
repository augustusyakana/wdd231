const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data.prophets);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let dob = document.createElement('p');
        let pob = document.createElement('p');

        dob.textContent = `Date of Birth: ${prophet.birthdate}`;
        pob.textContent = `Place of Birth: ${prophet.birthplace}`;
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Photo of prophet ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '300px');
        portrait.setAttribute('height', '300px');

        card.appendChild(fullName);
        card.appendChild(dob);
        card.appendChild(pob);
        card.appendChild(portrait);

        cards.appendChild(card);
    })
}



getProphetData();