const api = {
    key: process.env.API_KEY,
    url: "https://api.openweathermap.org/data/2.5/"
}

async function getCurrentWeatherAsync(city) {
    const response = await fetch(`${api.url}weather?q=${city}&units=metric&appId=${api.key}`);
    const currentWeather = await response.json();

    return currentWeather;
}

async function getWeatherForWeekAsync(longitude, latitude) {
    const response = await fetch (`${api.url}onecall?lat=${latitude}&lon=${longitude}&exclude=current,hourly,minutely,alerts&appid=${api.key}`);
    const weeklyWeather = await response.json();
    
    return weeklyWeather;
}

export { getCurrentWeatherAsync, getWeatherForWeekAsync }