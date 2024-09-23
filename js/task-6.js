const inputEl = document.querySelector('input');
const btnCreateEl = document.querySelector('button[data-create]');
const btnDestroyEl = document.querySelector('button[data-destroy]');
const boxsEl = document.querySelector('#boxes');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
};

boxsEl.classList.add('box-color');

const destroyBoxes = () => {
    boxsEl.innerHTML = '';
};

const createBoxes = () => {
    const amount = Number(inputEl.value);
    if(amount < 1 || amount > 100){
        return;
    };
    boxsEl.innerHTML = '';
    const fragment = document.createDocumentFragment()
    let size = 30;

    for (let i = 0; i < amount; i++) {
        
        const boxDiv = document.createElement('div');
        const currentColor = getRandomHexColor();
        boxDiv.style.backgroundColor = currentColor;
        boxDiv.style.width = `${size}px`;
        boxDiv.style.height = `${size}px`;
        fragment.appendChild(boxDiv);
        
        size += 10;
    };
    inputEl.value = '';
    boxsEl.appendChild(fragment); 
};

btnCreateEl.addEventListener('click', createBoxes);
btnDestroyEl.addEventListener('click', destroyBoxes);