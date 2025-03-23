const forecastContainer = document.querySelector('#forecast-container')

const lon = `158.21555381641937`;
const lat = `6.977687644435123`;
const key = `f1cb32b68544ca4f15333fc9f6b365cb`;

const url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=5&units=imperial&appid=${key}`;

async function apiFetch() {
    try {
        const response = await fetch(url2);
        if (response.ok) {
            const data = await response.json();
            console.log(data.list[0].dt_txt)
            displayForecast(data.list)
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.log(error)
    }
}

apiFetch();


const displayForecast = (list) => {
    list.forEach((item) => {
        let forecastTemp = document.createElement('span');
        forecastTemp.innerHTML = `${Math.trunc(item.main.temp)}&deg;F`;

        let forecastDay = document.createElement('span');
        const dateString = item.dt_txt;
        const date = new Date(dateString.replace(" ", "T"));
        const day = date.toLocaleString("en-US", { weekday: "long" })
        forecastDay.textContent = day;

        let p = document.createElement('p');
        p.appendChild(forecastDay);
        p.appendChild(forecastTemp)
        forecastContainer.append(p);

    })
}