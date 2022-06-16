let min = 00;
let sec = 00;
let msec = 00;
let getSeconds = document.querySelector(".sec");
let getTens = document.querySelector(".msec");
let getMins = document.querySelector(".min");
let btnStart = document.querySelector(".play");
let btnStop = document.querySelector(".stop");
let btnReset = document.querySelector(".reset");
let interval;

btnStart.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});
btnStop.addEventListener("click", () => {
  clearInterval(interval);
});
btnReset.addEventListener("click", () => {
  clearInterval(interval);
  msec = "00";
  sec = "00";
  min = "00";
  getSeconds.innerHTML = sec;
  getTens.innerHTML = msec;
  getMins.innerHTML = min;
});

function startTimer() {
  msec++;
  if (msec <= 9) {
    getTens.innerHTML = "0" + msec;
  }
  if (msec > 9) {
    getTens.innerHTML = msec;
  }
  if (msec > 99) {
    sec++;
    getSeconds.innerHTML = "0" + sec;
    msec = 0;
    getTens.innerHTML = "0" + 0;
  }
  if (sec > 9) {
    getSeconds.innerHTML = sec;
  }
  if (sec > 59) {
    min++;
    getMins.innerHTML = "0" + min;
    sec = 0;
    getSeconds.innerHTML = "0" + 0;
  }
  if (min > 9) {
    getSeconds.innerHTML = min;
  }
}
