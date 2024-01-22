/* const firstName = "Liza";
const secondName = "Medvedeva";

console. log (firstName, secondName)
*/

const res = document.getElementById('res');
const firstInput = document.getElementById('first-input');
const secondInput = document.getElementById('second-input');
const calcBtn = document.getElementById('calc');

const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const multiBtn = document.getElementById('multi');
const devisionBtn = document.getElementById('devision');

let action = "+";

plusBtn.onclick= function () {
    action = '+';
}

minusBtn.onclick= function () {
    action = '-';
}

multiBtn.onclick= function () {
    action = '*';
}

devisionBtn.onclick= function () {
    action = '/';
}

const print = function (result) {
    if (result >= 0) {
        res.style.color = 'green'
      }

      else {
        res.style.color = 'black'
    }

    res.textContent = result;
}

const getResult = function () {
    let firstNumber = Number (firstInput.value);
    let secondNumber = Number (secondInput.value);

    if (action === '+') {
        return firstNumber + secondNumber;
    } 
    else if (action === '-') {
        return firstNumber - secondNumber;
    }

    else if (action === '*') {
        return firstNumber * secondNumber;
    }

    else if (action === '/') {
        return firstNumber / secondNumber;
    }
}

calcBtn.onclick = function () {
   const result = getResult();
   print (result);
   }