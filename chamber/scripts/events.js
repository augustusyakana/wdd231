const eventsContainer = document.querySelector('.home-events')
const url = "data/events.json";

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    populateEvents(data)
}

getMembersData();

const populateEvents = (data) => {
    const ul = document.createElement('ul')
    data.forEach(item => {
        let li = document.createElement('li');
        let title = item.title;
        let description = item.description;
        let date = item.date;
        let time = item.time;
        let location = item.location;

        let dateTime = document.createElement('span');
        dateTime.innerHTML = `${date} | ${time}<br>`;
        dateTime.setAttribute('class', 'datetime');

        let titlep = document.createElement('p');
        titlep.innerHTML = `${title}<br>`

        let locationspan = document.createElement('span');
        locationspan.textContent = location;
        locationspan.setAttribute('class', 'location-span')

        li.appendChild(dateTime)
        li.appendChild(titlep)
        li.appendChild(locationspan)

        li.setAttribute('class', 'li-event');

        ul.setAttribute('class', 'ul-event');
        ul.appendChild(li);
    })
    eventsContainer.appendChild(ul);
}