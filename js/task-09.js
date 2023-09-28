const button = document.querySelector('.change-color');
const color = document.querySelector('.color');

button.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const css = document.createElement("style");
css.innerHTML = `
.change-color {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

.change-color:hover {
  background-color: blue;
}

`;

document.head.appendChild(css);