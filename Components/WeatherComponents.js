import * as moment from 'moment';

function getCurrentWeatherComponent(weatherResponse){
    const location = document.querySelector('.location-info');
    const {name, sys:{country}, weather} = weatherResponse;

    location.textContent = `${name}, ${country}`;

    const description = weather[0].description;
    const desciptionElement = document.querySelector('.description');
    desciptionElement.textContent = description;

    const temperature = weatherResponse.main.temp;
    const temperatureElement = document.querySelector('.temperature');
    temperatureElement.textContent = `${temperature}°c`;
}

function getFutureWeatherComponent(dayWeather){
    let {dt} = dayWeather;
    let date = moment.unix(dt).format("MM/DD/YYYY");
    const day = moment(date).format('ddd');

    const upcomingWeatherElement = document.createElement('div');
    upcomingWeatherElement.classList.add('col-3');
    upcomingWeatherElement.classList.add('upcoming-weather');

    upcomingWeatherInner = `<div class='card my-3'><div class='card-body'><div class="day-of-week">${day}</div><div class='weather-description'>${dayWeather.weather[0].description}</div></div></div>`;
    upcomingWeatherElement.innerHTML = upcomingWeatherInner;

    document.querySelector('.weather-row').appendChild(upcomingWeatherElement)
}

export { getCurrentWeatherComponent, getFutureWeatherComponent }