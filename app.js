'use strict';

const container = document.querySelector('.container');
const output = document.getElementById('calc');
const calcArr = [];
const resultArr = [];

// add function
function add(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return resultArr.push(total);
}

// subtract function; works for all numbers that are not equal to arr[0]
function subtract(arr) {
  let total = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[0]) continue;
    total -= arr[i];
  }
  return resultArr.push(total);
}

// multiply function
function multiply(arr) {
  let total = 1;
  for (let i = 0; i < arr.length; i++) {
    total = total * arr[i];
  }
  return resultArr.push(total);
}

// divide function
function divide(arr) {
  let total = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[0]) continue;
    total = total / arr[i];
  }
  return resultArr.push(total);
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
    const resultArr = calcArr.reduce((a, b) => String(a + b), 0);
    calcArr.splice(0, calcArr.length);
    calcArr.push(Number(resultArr));
    calcArr.push('+');
    output.textContent = calcArr;
    console.log(calcArr);
  } else if (minusEl) {
    const resultArr = calcArr.reduce((a, b) => String(a + b), 0);
    calcArr.splice(0, calcArr.length);
    calcArr.push(Number(resultArr));
    calcArr.push('-');
    output.textContent = calcArr;
    console.log(calcArr);
  } else if (multiplyEl) {
    const resultArr = calcArr.reduce((a, b) => String(a + b), 0);
    calcArr.splice(0, calcArr.length);
    calcArr.push(Number(resultArr));
    calcArr.push('*');
    output.textContent = calcArr;
    console.log(calcArr);
  } else if (divideEl) {
    const resultArr = calcArr.reduce((a, b) => String(a + b), 0);
    calcArr.splice(0, calcArr.length);
    calcArr.push(Number(resultArr));
    calcArr.push('/');
    output.textContent = calcArr;
    console.log(calcArr);
  } else if (clear) {
    calcArr.splice(0, calcArr.length);
    resultArr.splice(0, resultArr.length);
    output.textContent = calcArr;
  } else if (equal) {
    const secNum = calcArr
      .splice(2, calcArr.length)
      .reduce((a, b) => String(a + b), 0);
    calcArr.push(Number(secNum));

    resultArr.unshift(operate(calcArr[1], [calcArr[0], calcArr[2]]));
    console.log(resultArr); // undefined is typed for some reason at resultArr[0]
    output.textContent = resultArr[1];
  }
});

// task1: make the numbers appear on the screen without colon
// task2: allow for more numbers and fix logic to allow proper calc once more numbers and operators are initiated

// fn for splice and reduce array elements between +-/* and then calculation with loops/ continue for +*/-....decontruct arr into multiple variables and the re-make fn to calculate those variables

// indexof +-/*, operate index of operation with index+1, index-1; but only after all num have been reduced
//
