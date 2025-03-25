const forecastContainer = document.querySelector('#forecast-container')

const lon = `158.21555381641937`;
const lat = `6.977687644435123`;
const key = `f1cb32b68544ca4f15333fc9f6b365cb`;

const url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${key}`;

async function apiFetch() {
    try {
        const response = await fetch(url2);
        if (response.ok) {
            const data = await response.json();
            // console.log(data)
            processWeatherData(data.list)
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.log(error)
    }
}

apiFetch();


function processWeatherData(forecasts) {
    const dailyForecasts = {};

    forecasts.forEach(forecast => {
        const date = forecast.dt_txt.split(' ')[0];
        if (!dailyForecasts[date]) {
            dailyForecasts[date] = {
                day: new Date(date).toLocaleDateString('en-US', { weekday: 'long' }), // Convert to day name
                temp: forecast.main.temp // Extract temperature
            };
        }
    });

    displayWeather(dailyForecasts);
}

function displayWeather(forecast) {
    const dailyForecast = Object.values(forecast);
    console.log(dailyForecast);

    dailyForecast.forEach(forecast => {
        let day = document.createElement('span');
        // console.log(forecast)
        day.textContent = forecast.day;

        let temp = document.createElement('span');
        temp.innerHTML = ` ${forecast.temp}&deg:F`

        let p = document.createElement('p');
        p.appendChild(day);
        p.appendChild(temp);

        forecastContainer.append(p);
    })
}