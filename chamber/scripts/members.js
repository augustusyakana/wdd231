const cardsContainer = document.querySelector('.company-card-container');
let url = 'data/members.json';

const gridBtn = document.querySelector('.gridbtn');
const listBtn = document.querySelector('.listbtn');

gridBtn.addEventListener('click', () => {
    cardsContainer.classList.add('grid');
    cardsContainer.classList.remove('list');
})

listBtn.addEventListener('click', () => {
    cardsContainer.classList.add('list');
    cardsContainer.classList.remove('grid');
})

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.members);
    displayMembers(data.members);
}
const displayMembers = (data) => {
    data.forEach(member => {
        let card = document.createElement('div');
        card.setAttribute('class', 'card');

        let company = document.createElement('h3');
        company.textContent = member.name;
        company.setAttribute('class', 'company');

        let addPhone = document.createElement('div');
        addPhone.setAttribute('class', 'address-phone');

        let address = document.createElement('p');
        address.innerHTML = `${member.address}<br>${member.city}, ${member.state}<br>${member.country} ${member.zip}`;
        address.setAttribute('class', 'member-address')

        let phone = document.createElement('p');
        phone.textContent = member.phone;
        phone.setAttribute('class', 'member-phone');

        let website = document.createElement('p');
        website.textContent = member.website;
        website.setAttribute('class', 'member-website');

        let imgCont = document.createElement('div');
        imgCont.setAttribute('class', 'img-cont');

        let logo = document.createElement('img');
        logo.setAttribute('src', member.logo);
        logo.setAttribute('alt', `${member.name} company logo`);
        logo.setAttribute('class', 'member-logo');

        let membership = document.createElement('p');
        membership.textContent = member.membership;
        membership.setAttribute('class', 'member-level');

        imgCont.appendChild(logo)

        addPhone.appendChild(address);
        addPhone.appendChild(phone)

        card.appendChild(imgCont);
        card.appendChild(company);
        card.appendChild(addPhone);
        card.appendChild(website);
        card.appendChild(membership);

        cardsContainer.append(card);


    })
}

getMembersData();

