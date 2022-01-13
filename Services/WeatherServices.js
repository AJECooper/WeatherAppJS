const api = {
    key: process.env.API_KEY,
    url: "https://api.openweathermap.org/data/2.5/"
}

export default async function getCurrentWeatherAsync(city) {
    const response = await fetch(`${api.url}weather?q=${city}&units=metric&appId=${api.key}`);
    const currentWeather = await response.json();

    return currentWeather;
}