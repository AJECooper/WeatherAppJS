import { getCurrentWeatherAsync, getWeatherForWeekAsync } from "./Services/WeatherServices";
import { getCurrentWeatherComponent, getFutureWeatherComponent } from "./Components/WeatherComponents";

const form = document.querySelector('#search-city');
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    let weatherRow = document.querySelector(".weather-row");
    weatherRow.innerHTML = '';
    
    const formData = new FormData(event.target);
    const city = formData.get('city-input');

    const currentWeather = await getCurrentWeatherAsync(city);
    getCurrentWeatherComponent(currentWeather);

    const {lon, lat} = getLonLatFromWeather(currentWeather);

    const futureWeather = await getWeatherForWeekAsync(lon, lat);
    const {daily} = futureWeather;

    daily.forEach((day, i) => {
        if(i == 0) {
            return;
        }

        getFutureWeatherComponent(day);
    });
});

function getLonLatFromWeather(weather){
    const {coord:{lat}, coord:{lon}} = weather;

    return {lon, lat};
}