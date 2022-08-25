const refs = {
    btnDecrement: document.querySelector('button[data-action="decrement"]'),
    valueEl: document.querySelector('#value'),
    btnIncrement: document.querySelector('button[data-action="increment"]'),    
};

refs.btnDecrement.addEventListener('click', onBtnDecrementClick);
refs.btnIncrement.addEventListener('click', onBtnIncrementClick);

let counterValue = 0;

function onBtnDecrementClick() {
   counterValue -= 1;
    console.log(counterValue);
    refs.valueEl.textContent = counterValue;
}

function onBtnIncrementClick() {
    counterValue += 1;
    console.log(counterValue);
    refs.valueEl.textContent = counterValue;
}