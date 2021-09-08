const swDiv = document.querySelector(".stopwatch");
const swSpan = document.getElementById("stopwatch");
const swStartBtn = document.getElementById("start");
const swStopBtn = document.getElementById("stop");
const swResetBtn = document.getElementById("reset");
const focusTime = document.getElementById("focustime");
const STOPWATCH_KEY = "stopwatch";
let seconds = 0;
// function loadWatch(getRecord) {
//   seconds = getRecord;
//   startWatch();
// } 

function startWatch() {
  timerStart = setInterval(function(){
    seconds ++ ;
    let hour = parseInt(seconds / 3600);
    let min = parseInt((seconds % 3600) / 60);
    let sec = parseInt((seconds % 3600) % 60);
    swSpan.innerText = `${addZero(hour)}:${addZero(min)}:${addZero(sec)}`;
    document.title = `🔥 ${addZero(hour)}:${addZero(min)}:${addZero(sec)}`;
    focusTime.innerText = "🔥 Focus Time"
  }, 1000);
  swDiv.style.backgroundColor = "rgba(0, 255, 106, 0.55)";
  return seconds;
}

function addZero(number) {
  return (number <10 ? '0'+number : number);
}

function stopWatch() {
  if(typeof timerStart !== 'undefined'){
  clearInterval(timerStart);
  swDiv.style.backgroundColor = "rgba(255, 41, 41, 0.55)";

  }
  let hour = parseInt(seconds / 3600);
  let min = parseInt((seconds % 3600) / 60);
  let sec = parseInt((seconds % 3600) % 60);
  document.title = `⏹️ ${addZero(hour)}:${addZero(min)}:${addZero(sec)}`;
  focusTime.innerText = "⏹️ Focus Time"
}

function resetWatch() {
  if(typeof timerStart !== 'undefined'){
    clearInterval(timerStart);
  }
  seconds = 0;
  swSpan.innerText = "00:00:00";
  swDiv.style.backgroundColor = "rgba(0, 0, 0, 0.55)";
  let hour = parseInt(seconds / 3600);
  let min = parseInt((seconds % 3600) / 60);
  let sec = parseInt((seconds % 3600) % 60);
  document.title = `⏹️ ${addZero(hour)}:${addZero(min)}:${addZero(sec)}`;
  focusTime.innerText = "⏹️ Focus Time"
}

function recordWatch(event) {
    // 표준에 따라 기본 동작 방지
    event.preventDefault();
    // Chrome에서는 returnValue 설정이 필요함
    event.returnValue = '';
    localStorage.setItem(STOPWATCH_KEY, startWatch());
}

function getRecord() {
  const savedStopWatch = localStorage.getItem(STOPWATCH_KEY);
  seconds = savedStopWatch;
  let hour = parseInt(seconds / 3600);
  let min = parseInt((seconds % 3600) / 60);
  let sec = parseInt((seconds % 3600) % 60);
  swSpan.innerText = `${addZero(hour)}:${addZero(min)}:${addZero(sec)}`;
  document.title = `⏹️ ${addZero(hour)}:${addZero(min)}:${addZero(sec)}`;
  if (seconds > 0 ){
    swDiv.style.backgroundColor = "rgba(255, 41, 41, 0.55)";
  }
}

swStartBtn.addEventListener("click", startWatch);
swStopBtn.addEventListener("click", stopWatch);
swResetBtn.addEventListener("click", resetWatch);
window.addEventListener('beforeunload', recordWatch);
window.addEventListener('load', getRecord)


