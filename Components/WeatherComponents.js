export default function getCurrentWeatherComponent(weatherResponse){
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