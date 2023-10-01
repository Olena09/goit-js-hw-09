import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];

    if (selectedDate < new Date()) {
      window.alert("Please choose a date in the future");
      return;
    }

    const startButton = document.querySelector('[data-start]');
    startButton.disabled = false;
  },
};

flatpickr("#datetime-picker", options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');
const startButton = document.querySelector('[data-start]');
let countdownInterval;

startButton.addEventListener('click', () => {
    const selectedDate = new Date(document.querySelector('#datetime-picker').value);
    const currentDate = new Date();

    if (selectedDate <= currentDate) {
        window.alert("Please choose a date in the future");
        return;
    }
    startButton.disabled = true;
    const timeDifference = selectedDate - currentDate;

    function updateTimer() {
        const timeObj = convertMs(timeDifference);
        daysElement.textContent = addLeadingZero(timeObj.days);
        hoursElement.textContent = addLeadingZero(timeObj.hours);
        minutesElement.textContent = addLeadingZero(timeObj.minutes);
        secondsElement.textContent = addLeadingZero(timeObj.seconds);
        timeDifference -= 1000;

        if (timeDifference < 0) {
            clearInterval(countdownInterval);
            startButton.disabled = false;
        }
    }
    updateTimer();
    countdownInterval = setInterval(updateTimer, 1000);
});

