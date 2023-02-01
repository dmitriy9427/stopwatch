const hoursElement = document.querySelector(".stopwatch__hours");
const minutesElement = document.querySelector(".stopwatch__minutes");
const secondsElement = document.querySelector(".stopwatch__seconds");
const millisecondsElement = document.querySelector(".stopwatch__milliseconds");

const startButton = document.querySelector(".stopwatch__button_type-start");
const pauseButton = document.querySelector(".stopwatch__button_type-pause");
const stopButton = document.querySelector(".stopwatch__button_type-stop");
const newButton = document.querySelector(".stopwatch__button_type-new");

let hour = "00",
  minute = "00",
  second = "00",
  millisecond = "00",
  interval;

const clearDataTimer = () => {
  hour = "00";
  minute = "00";
  second = "00";
  millisecond = "00";
  millisecondsElement.textContent = "00";
  secondsElement.textContent = "00";
  minutesElement.textContent = "00";
  hoursElement.textContent = "00";
};

const stopTimer = () => {
  clearInterval(interval);
  clearDataTimer();
};

const startTime = () => {
  millisecond++;
  if (millisecond < 10) {
    millisecondsElement.textContent = "0" + millisecond;
  }
  if (millisecond > 9) {
    millisecondsElement.textContent = millisecond;
  }
  if (millisecond > 99) {
    second++;
    millisecond = "00";
    secondsElement.textContent = "0" + second;
  }
  if (second > 9) {
    secondsElement.textContent = second;
  }
  if (second > 59) {
    minute++;
    second = "00";
    minutesElement.textContent = "0" + minute;
  }
  if (minute > 9) {
    minutesElement.textContent = minute;
  }
  if (minute > 59) {
    hour++;
    minute = "00";
    hoursElement.textContent = "0" + hour;
  }
  if (hour > 9) {
    hoursElement.textContent = hour;
  }
  if (hour > 59) {
    clearDataTimer();
  }
};

newButton.addEventListener("click", () => {
  const results = document.querySelector(".stopwatch__block-results");
  const result = document.createElement("div");
  result.textContent = `${hour}:${minute}:${second}:${millisecond}`;
  results.append(result);
  clearDataTimer();
});

stopButton.addEventListener("click", () => stopTimer());

const pauseTimer = () => {
  clearInterval(interval);
};

startButton.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(startTime, 10);
});

pauseButton.addEventListener("click", () => pauseTimer());
