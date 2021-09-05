const weatherIcon = document.querySelector("#weatherIcon");
const temperatureInfo = document.querySelector("#temperatureInfo");
const placeInfo = document.querySelector("#placeInfo");
const weatherMessage = document.querySelector("#weatherMessage");

const API_KEY = "b00bc32068093ec861b926e0b624cc79";

const WEATHER_ICON_PATH = "http://openweathermap.org/img/w/";
const WEATHER_HIDDEN_CLASS_NAME = "hidden";

function onGetGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temperature = Math.round(data.main.temp * 10) / 10;
      const country = data.sys.country;
      const place = data.name;
      const weatherDescript = data.weather[0].description;
      const weatherIconName = data.weather[0].icon;

      weatherIcon.src = `${WEATHER_ICON_PATH}/${weatherIconName}.png`;
      weatherIcon.title = `${weatherDescript}`;
      temperatureInfo.innerHTML = `${temperature}&#176;C`;
      placeInfo.innerText = `${country}, ${place}`;
      weatherMessage.classList.add(WEATHER_HIDDEN_CLASS_NAME);
    });
}

function onGetGeoError() {
  weatherMessage.innerText = "Can't find you. No weather for you.";
}

navigator.geolocation.getCurrentPosition(onGetGeoSuccess, onGetGeoError);
