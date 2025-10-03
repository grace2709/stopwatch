let timer;
let [hours, minutes, seconds] = [0, 0, 0];
let isRunning = false;


//code to set the interval

document.getElementById("start").addEventListener("click", () => {
    if(!isRunning){
        isRunning = true;
        timer = setInterval(runTimer, 1000);
    }
});
//this code sets the "stop" timer
document.getElementById("stop").addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
});

//reset

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(timer);
    [hours, minutes, seconds] = [0, 0, 0];
    display.innerHTML = "00:00:00";
    isRunning = false;
    
});
function runTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) { //if miinutes equals 60, then minutes = 0; hour increases by 1
    minutes = 0;
    hours++;
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  display.innerHTML = `${h}:${m}:${s}`;   //this works with the html filw

}
