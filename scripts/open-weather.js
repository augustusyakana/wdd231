const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const figcaption = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.748047308359254&lon=6.636408990440426&units=imperial&appid=f1cb32b68544ca4f15333fc9f6b365cb';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data)
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.log(error)
    }
}

apiFetch();

const displayResults = (data) => {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    let iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('alt', desc);
    weatherIcon.setAttribute('src', iconsrc);
    figcaption.textContent = desc;
}