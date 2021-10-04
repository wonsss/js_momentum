const timer = document.getElementById("timer-form");
const ddaytimer = document.querySelector(".ddaytimer");
const year1 = document.getElementById("year");
const month1 = document.getElementById("month");
const day1 = document.getElementById("day");
const ddayName = document.getElementById("ddayName");
const ddayOutput = document.getElementById("ddayOutput");
const memoryDday = document.querySelector(".memoryDday");
const resetBtn = document.getElementById("resetBtn");
const DDAY_KEY = "dday";
const DDAYNAME_KEY = "ddayName1";
const DDAYFULL_KEY = "ddayFull";

function paintTimer(ddayName1, ddayFull) {
  const targetDate = new Date(ddayFull);
  const nowDate = new Date();
  const differ = parseInt(targetDate.getTime() - nowDate.getTime(), 10);
  const differSec = differ / 1000;
  const day = Math.floor(differSec / 86400);
  if (day > 0) {
    ddaytimer.innerHTML = `D-Day ${day}`;
  } else {
    ddaytimer.innerHTML = `${Math.abs(day)} days passed`;
  }

  memoryDday.innerText = `${ddayName1}(${ddayFull})`;
}

function handleTimer() {
  const yearInput = parseInt(year1.value, 10);
  const monthInput = parseInt(month1.value, 10);
  const dayInput = parseInt(day1.value, 10);
  const nowDate = new Date();
  const targetDate = new Date(yearInput, monthInput - 1, dayInput);
  const differ = parseInt(targetDate.getTime() - nowDate.getTime(), 10);
  const differSec = differ / 1000;
  const day = Math.floor(differSec / 86400);
  const ddayName1 = ddayName.value;
  const ddayFull = `${yearInput}.${monthInput}.${dayInput}.`;
  paintTimer(ddayName1, ddayFull);
  localStorage.setItem(DDAY_KEY, day);
  localStorage.setItem(DDAYNAME_KEY, ddayName1);
  localStorage.setItem(DDAYFULL_KEY, ddayFull);
  ddayOutput.classList.remove("hidden");
  timer.classList.add("hidden");
}

function showHandleTimer() {
  timer.classList.remove("hidden");
  resetBtn.classList.add("hidden");
  ddayOutput.innerText = "";
  memoryDday.innerText = "";
}

const savedDday = localStorage.getItem(DDAY_KEY);
const savedDdayname = localStorage.getItem(DDAYNAME_KEY);
const savedDdayFull = localStorage.getItem(DDAYFULL_KEY);

if (savedDdayname !== null) {
  ddayOutput.classList.remove("hidden");
  paintTimer(savedDdayname, savedDdayFull);
  timer.classList.add("hidden");
  resetBtn.classList.remove("hidden");
}

timer.addEventListener("submit", handleTimer);
resetBtn.addEventListener("click", showHandleTimer);
