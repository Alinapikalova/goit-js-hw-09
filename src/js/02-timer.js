import '../css/common.css';

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const btnEl = document.querySelector('button[data-start]');
const hoursEl = document.querySelector('span[data-hours]');
const daysEl = document.querySelector('span[data-days]');
const minutesEl = document.querySelector('span[data-minutas]');
const secondsEl = document.querySelector('span[data-seconds]');

const dateTimePickar = flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  minDate: 'today',
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let userDate = selectedDates[0].getTime();
    const dateNow = new Date();

    if (userDate < dateNow.getTime()) {
      alert('Please choose a date in the future');
      btnEl.disabled = true;
    } else {
      btnEl.disabled = false;
    }
  },
});

const timer = {
  start() {
    const startTime = Date.now();
    setInterval(() => {
      const currentTime = Date.now();
      console.log(currentTime - startTime);
    }, 1000);
  },
};
timer.start();

function updateClockface({ hour, min, sec }) {}
