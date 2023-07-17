const result = document.querySelector('.cal-display');
const clear = document.querySelector('#clear');
const compute = document.querySelector('.btn-equal');
const buttons = document.querySelectorAll('.num, .op');
let input = [];

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', () => {
        const operators = ['+', '-', '/', '*']; // Fixed typo: operator -> operators

        if (input[input.length - 1] === '=' && !operators.includes(button.value)) {
            result.value = button.value;
        } else {
            result.value += button.value;
        }

        input.push(button.value);
    });
});

compute.addEventListener('click', () => {
    input.push('=');

    if (result.value.length === 0) {
        return false;
    } else {
        result.value = eval(result.value);
    }
});

clear.addEventListener('click', () => {
    result.value = '';
    input = [];
});
