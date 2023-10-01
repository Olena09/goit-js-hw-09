
const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let changeColor;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

startButton.addEventListener('click', onClickStart);
stopButton.addEventListener('click', onClickStop);

function onClickStart(event) {
    event.preventDefault();
    stopButton.disabled = false;
    startButton.disabled = true;
    changeColor = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function onClickStop(event) {
    clearInterval(changeColor);
    startButton.disabled = false;
    stopButton.disabled = true;
}


