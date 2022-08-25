function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('#controls > input'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  boxesContainer: document.querySelector('#boxes'),
};

refs.btnCreate.addEventListener('click', createBoxes);
refs.btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const boxes = [];
  amount = refs.input.value;
  
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    
    boxes.push(box);
  };
  
  console.log(boxes);
  refs.boxesContainer.append(...boxes);
  refs.input.value = '';
}

function destroyBoxes() {
  refs.boxesContainer.innerHTML = '';
}
