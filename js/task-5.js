const btnEl = document.querySelector('.change-color');
const textColorEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  };

const handleBtn = () => {
    const currentColor = getRandomHexColor();
    bodyEl.style.backgroundColor = currentColor;;
    textColorEl.textContent = currentColor; 
};

btnEl.addEventListener('click', handleBtn);