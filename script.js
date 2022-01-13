import getCurrentWeatherAsync from "./Services/WeatherServices";
import getCurrentWeatherComponent from "./Components/WeatherComponents";

const form = document.querySelector('#search-city');
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const city = formData.get('city-input');

    const currentWeather = await getCurrentWeatherAsync(city);
    getCurrentWeatherComponent(currentWeather);
})