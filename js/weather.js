const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

const apiKey = "b00bc32068093ec861b926e0b624cc79";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = `(${data.name})`;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C `;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

//브라우저에서 위치 좌표를 준다. wifi나 gps 등 활용 가능
