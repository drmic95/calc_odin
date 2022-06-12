// 'use strict';

// all numbers selected
const num0 = document.querySelector('.num_0');
const num1 = document.querySelector('.num_1');
const num2 = document.querySelector('.num_2');

const num3 = document.querySelector('.num_3');
const num4 = document.querySelector('.num_4');
const num5 = document.querySelector('.num_5');

const num6 = document.querySelector('.num_6');
const num7 = document.querySelector('.num_7');
const num8 = document.querySelector('.num_8');

const num9 = document.querySelector('.num_9');

// operator elements
const minusEl = document.querySelector('.op_minus');
const plusEl = document.querySelector('.op_plus');
const divideEl = document.querySelector('.op_divide');
const multiplyEl = document.querySelector('.op_multiply');
const equalClass = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const container = document.querySelector('.container');
const input = document.getElementById('calc');

// add function
function add(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return console.log(total);
}
let test1 = [4, 5, 6, 5, 29, 8403, 8483];
// add(test1);

// subtract function; works for all numbers that are not equal to arr[0]
function subtract(arr) {
  let total = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[0]) continue;
    total -= arr[i];
  }
  return console.log(total);
}
let test2 = [20, 5, 10];
//subtract(test2);

// multiply function
function multiply(arr) {
  let total = 1;
  for (let i = 0; i < arr.length; i++) {
    total = total * arr[i];
  }
  return console.log(total);
}
let test3 = [2, 10];
// multiply(test3);

// divide function
function divide(arr) {
  let total = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[0]) continue;
    total = total / arr[i];
  }
  return console.log(total);
}
let test4 = [10, 5, 20];

// divide(test4);
function operate(operator, fn, arr) {
  if (operator === '+') {
    fn === add(arr);
  } else if (operator === '-') {
    fn === subtract(arr);
  } else if (operator === '*') {
    fn === multiply(arr);
  } else if (operator === '/') {
    fn === divide(arr);
  } else {
    console.log('something went wrong');
  }
}
// const test5 = [10, 5];
// operate('-', subtract, test5);

// try split to split the array of numbers based on +/-/* and / calc them individually and then return total

// add eventListeners

container.addEventListener('click', (event) => {
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

  if (zero) {
    input.textContent = 0; // old text content needs to show
  }
});
