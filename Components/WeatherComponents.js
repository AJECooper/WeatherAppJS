import * as moment from "moment";
import { weatherKeys, weatherConstants } from "../Constants/WeatherConstants";

function getCurrentWeatherComponent(weatherResponse) {
  const weatherResponseId = weatherResponse.weather[0].id;
  const weatherObject = getWeatherObjectConstant(weatherResponseId);

  const {name, sys:{country}, main:{temp}} = weatherResponse;
  const {description} = weatherObject;

  const locationElement = document.getElementById('weather-location');
  const temperatureElement = document.getElementById('current-temp'); 
  const descriptionElement = document.getElementById('current-description');

  locationElement.textContent = `${name}, ${country}`;
  temperatureElement.textContent = `${Math.round(temp)}°c`;
  descriptionElement.textContent = `${description}`;
}

function getFutureWeatherComponent(weatherForDay) {
  const weatherId = weatherForDay.weather[0].id;
  const weatherObject = getWeatherObjectConstant(weatherId);

  const {description, colour, icon} = weatherObject;

  let {dt} = weatherForDay;
  let date = moment.unix(dt).format("MM/DD/YYYY");

  const container = document.createElement("div");
  container.classList.add("col-12", "col-md-4", "col-xl-3", "mb-3");

  const upcomingWeatherInner = `
    <div class="card future-weather-card"><div class="colour-stripe"></div>
    <div class="card-content">
    <div class="card-body">
    <div class="media d-flex justify-content-around">
    <div class="align-self-center"><i class="wi ${icon}"></i></div>
    <div class="media-body">
    <div class="weather-description d-block text-end">${description}</div>
    <span class="text-muted date-info">${moment(date).format("ddd")} ${moment(date).format("DD/MM/YYYY")}</span>
    </div></div></div></div></div></div>`;

  container.innerHTML += upcomingWeatherInner;

  const stripe = container.querySelector(".colour-stripe");
  stripe.style.backgroundColor = colour;

  document.querySelector("#future-weather-row").appendChild(container);
} 

function getWeatherObjectConstant (id) {
  const weatherConstObject = weatherConstants.find(w => w.codes.find(c => c == id));
  
  return weatherConstObject;
}

export { getCurrentWeatherComponent, getFutureWeatherComponent };
