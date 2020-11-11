import './styles.scss';

const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

let btnStartRef, btnStopRef, intervalId;
document
  .querySelectorAll('button')
  .forEach(el => (el.dataset.action === 'start' ? (btnStartRef = el) : (btnStopRef = el)));
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
btnStopRef.setAttribute('disabled', 'disabled');

btnStartRef.addEventListener('click', startColorSwitcher);
btnStopRef.addEventListener('click', stopColorSwitcher);

function startColorSwitcher() {
  btnStopRef.removeAttribute('disabled');
  btnStartRef.setAttribute('disabled', 'disabled');
  intervalId = setInterval(() => {
    const i = randomIntegerFromInterval(0, colors.length - 1);
    document.body.style.backgroundColor = colors[i];
  }, 1000);
}

function stopColorSwitcher() {
  btnStartRef.removeAttribute('disabled');
  btnStopRef.setAttribute('disabled', 'disabled');
  clearInterval(intervalId);
}
