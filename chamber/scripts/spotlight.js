const spotlighturl = 'data/members.json';
const spotlightContainer = document.querySelector('.spot-container');


async function getMembersData() {
    const response = await fetch(spotlighturl);
    const data = await response.json();
    console.log(data.members);
    const highTier = getHighTierMembers(data.members);
    const spotlights = getRandomMembers(highTier, 3);
    populateSpotlight(spotlights);
}

const getHighTierMembers = (list) => {
    const highTier = list.filter(member => member.membership === "Elite Member" || member.membership === "Premium Member");
    return highTier;
}

const getRandomMembers = (list, num) => {
    const shuffled = [...list].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, num);
}

const populateSpotlight = (list) => {
    list.forEach((member) => {
        let card = document.createElement('div');
        card.setAttribute('class', 'spot-card');

        let company = document.createElement('h3');
        company.textContent = member.name;
        company.setAttribute('class', 'spot-company');

        let addPhone = document.createElement('div');
        addPhone.setAttribute('class', 'spot-address-phone');

        let address = document.createElement('p');
        address.innerHTML = `${member.address}<br>${member.city}, ${member.state}<br>${member.country} ${member.zip}`;
        address.setAttribute('class', 'spot-member-address')

        let phone = document.createElement('p');
        phone.textContent = member.phone;
        phone.setAttribute('class', 'spot-member-phone');

        let website = document.createElement('p');
        website.textContent = member.website;
        website.setAttribute('class', 'spot-member-website');

        let imgCont = document.createElement('div');
        imgCont.setAttribute('class', 'spot-img-cont');

        let logo = document.createElement('img');
        logo.setAttribute('src', member.logo);
        logo.setAttribute('alt', `${member.name} company logo`);
        logo.setAttribute('class', 'spot-member-logo');

        let membership = document.createElement('p');
        membership.textContent = member.membership;
        membership.setAttribute('class', 'spot-member-level');

        imgCont.appendChild(logo)

        addPhone.appendChild(address);
        addPhone.appendChild(phone)

        card.appendChild(imgCont);
        card.appendChild(company);
        card.appendChild(addPhone);
        card.appendChild(website);
        card.appendChild(membership);

        spotlightContainer.append(card);

    })
}

getMembersData();