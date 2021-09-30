const clock = document.querySelector("h2#clock");
const today = document.querySelector("#today");
const dayArray = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function getClock() {
  const date = new Date();
  const hours =
    date.getHours() > 12
      ? `PM ${String(date.getHours() - 12).padStart(2, "0")}`
      : `AM ${String(date.getHours()).padStart(2, "0")}`;
  const minutes = String(date.getMinutes()).padStart(2, "0");
  // const seconds = String(date.getSeconds()).padStart(2, "0");
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const dateNum = String(date.getDate()).padStart(2, "0");
  const dayIndex = date.getDay();
  clock.innerText = `${hours}:${minutes}`;
  today.innerText = `${year}. ${month}. ${dateNum}. ${dayArray[dayIndex]}`;
}
getClock();
setInterval(getClock, 1000);
