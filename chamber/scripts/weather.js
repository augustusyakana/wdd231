const currentTemp = document.querySelector('#weather-temp');
const weatherIcon = document.querySelector('#weather-img');
const caption = document.querySelector('#weather-description');

const url1 = 'https://api.openweathermap.org/data/2.5/weather?lat=6.977687644435123&lon=158.21555381641937&units=imperial&appid=f1cb32b68544ca4f15333fc9f6b365cb';

async function apiFetch() {
    try {
        const response = await fetch(url1);
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
    currentTemp.innerHTML = `${Math.trunc(data.main.temp)}&deg;F`;
    let iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('alt', desc);
    weatherIcon.setAttribute('src', iconsrc);
    caption.textContent = desc;
}