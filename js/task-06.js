const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const inputLength = Number(input.dataset.length);

    if (event.currentTarget.value.length === inputLength) {
        event.currentTarget.classList.remove('invalid');
        event.currentTarget.classList.add('valid');
        console.log('valid');
    } else {
        event.currentTarget.classList.remove('valid');
        event.currentTarget.classList.add('invalid');
        console.log('invalid')
    }
}