const swDiv = document.querySelector(".stopwatch");
const swSpan = document.getElementById("stopwatch");
const swStartBtn = document.getElementById("start");
const swStopBtn = document.getElementById("stop");
const swResetBtn = document.getElementById("reset");
let seconds = 0;
function startWatch() {
  timerStart = setInterval(function(){
    seconds ++ ;
    let hour = parseInt(seconds / 3600);
    let min = parseInt((seconds % 3600) / 60);
    let sec = parseInt((seconds % 3600) % 60);
    swSpan.innerText = `${addZero(hour)}:${addZero(min)}:${addZero(sec)}`;
  }, 1000);
  swDiv.style.backgroundColor = "rgba(0, 255, 106, 0.55)";
}
function addZero(number) {
  return (number <10 ? '0'+number : number);
}

function stopWatch() {
  if(timerStart){
  clearInterval(timerStart);
  swDiv.style.backgroundColor = "rgba(255, 41, 41, 0.55)";
  }
}

function resetWatch() {
  if(timerStart){
    clearInterval(timerStart);
  }
  seconds = 0;
  swSpan.innerText = "00:00:00";
  swDiv.style.backgroundColor = "rgba(0, 0, 0, 0.55)";
}

swStartBtn.addEventListener("click", startWatch);
swStopBtn.addEventListener("click", stopWatch);
swResetBtn.addEventListener("click", resetWatch)

