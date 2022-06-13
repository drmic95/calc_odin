'use strict';

const container = document.querySelector('.container');
const output = document.getElementById('calc');

// add function
function add(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return console.log(total);
}

// subtract function; works for all numbers that are not equal to arr[0]
function subtract(arr) {
  let total = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[0]) continue;
    total -= arr[i];
  }
  return console.log(total);
}

// multiply function
function multiply(arr) {
  let total = 1;
  for (let i = 0; i < arr.length; i++) {
    total = total * arr[i];
  }
  return console.log(total);
}

// divide function
function divide(arr) {
  let total = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[0]) continue;
    total = total / arr[i];
  }
  return console.log(total);
}

function operate(operator, arr) {
  if (operator === '+') {
    add(arr);
  } else if (operator === '-') {
    subtract(arr);
  } else if (operator === '*') {
    multiply(arr);
  } else if (operator === '/') {
    divide(arr);
  } else {
    console.log('something went wrong');
  }
}
const test5 = [10, 5];
operate('-', test5);

const calcArr = [];

// add eventListeners
container.addEventListener('click', (event) => {
  // numbers
  const zero = event.target.classList.contains('num_0');
  const one = event.target.classList.contains('num_1');
  const two = event.target.classList.contains('num_2');
  const three = event.target.classList.contains('num_3');
  const four = event.target.classList.contains('num_4');
  const five = event.target.classList.contains('num_5');
  const six = event.target.classList.contains('num_6');
  const seven = event.target.classList.contains('num_7');
  const eight = event.target.classList.contains('num_8');
  const nine = event.target.classList.contains('num_9');

  // operators
  const minusEl = event.target.classList.contains('op_minus');
  const plusEl = event.target.classList.contains('op_plus');
  const multiplyEl = event.target.classList.contains('op_multiply');
  const divideEl = event.target.classList.contains('op_divide');

  const clear = event.target.classList.contains('clear');
  const equal = event.target.classList.contains('equal');

  if (zero) {
    calcArr.push(0);
    output.textContent = calcArr;
    console.log(calcArr);
  } else if (one) {
    calcArr.push(1);
    output.textContent = calcArr;
    console.log(calcArr);
  } else if (two) {
    calcArr.push(2);
    output.textContent = calcArr;
    console.log(calcArr);
  } else if (three) {
    calcArr.push(3);
    output.textContent = calcArr;
    console.log(calcArr);
  } else if (four) {
    calcArr.push(4);
    output.textContent = calcArr;
    console.log(calcArr);
  } else if (five) {
    calcArr.push(5);
    output.textContent = calcArr;
    console.log(calcArr);
  } else if (six) {
    calcArr.push(6);
    output.textContent = calcArr;
    console.log(calcArr);
  } else if (seven) {
    calcArr.push(7);
    output.textContent = calcArr;
    console.log(calcArr);
  } else if (eight) {
    calcArr.push(8);
    output.textContent = calcArr;
    console.log(calcArr);
  } else if (nine) {
    calcArr.push(9);
    output.textContent = calcArr;
    console.log(calcArr);
  } else if (plusEl) {
    // concatinate or reduce the numbers together before operation so that larger numbers can be calculated
    // calcArr.forEach(), reduce()
    calcArr.push('+');
    output.textContent = calcArr;
    console.log(calcArr);
  } else if (minusEl) {
    calcArr.push('-');
    output.textContent = calcArr;
    console.log(calcArr);
  } else if (multiplyEl) {
    calcArr.push('*');
    output.textContent = calcArr;
    console.log(calcArr);
  } else if (divideEl) {
    calcArr.push('/');
    output.textContent = calcArr;
    console.log(calcArr);
  } else if (clear) {
    calcArr.splice(0, calcArr.length);
    output.textContent = calcArr;
  } else if (equal) {
    const result = operate(calcArr[1], [calcArr[0], calcArr[2]]);
    output.textContent = result; // correct calc but goes into console
  }
});

// try split to split the array of numbers based on +/-/* and / calc them individually and then return total
// reduce method on all event targets split by +/*- operators
// if else may be short-end with one of loop methods

// operate('-', test5); find "-" "+", find "*" "/", if this than subtract.etc. arr

// before operators concatinete the array elemensts
