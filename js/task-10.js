const input = document.querySelector('input');
const createBatton = document.querySelector('[data-create]');
const destroyBatton = document.querySelector('[data-destroy]');
const container = document.querySelector('#boxes');






createBatton.addEventListener('click', create);
destroyBatton.addEventListener('click', destroy);
function create() {
  const amount = input.value;
  const boxes = [];
  for (let i = 0; i < amount; i+=1) {
    const box = document.createElement('div');
    box.style.width = '30px';
    box.style.height = '30px';
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  container.append(...boxes);
}
function destroy() {
  container.innerHTML = '';
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
