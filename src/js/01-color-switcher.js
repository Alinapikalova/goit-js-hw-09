import '../css/common.css';

function getRandomHexColor() {
  return color =`#${Math.floor(Math.random() * 16777215)
    .toString(16)
      .padStart(6, 0)}`;
    console.log(color);
}


const refs = {
  body: document.body,
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};

const INTERVAL_DELAY = 1000;
let intervalId = null;

refs.btnStart.addEventListener('click', changeColor);
refs.btnStop.addEventListener('click', onBtnStop);

function changeColor() {
    intervalId = setInterval(() => {
        color = getRandomHexColor();
        refs.body.style.backgroundColor =
          color;
    }, INTERVAL_DELAY);
    refs.btnStart.disabled = true;
};

function onBtnStop() {
  clearInterval(intervalId);
  refs.btnStart.disabled = false;
}
