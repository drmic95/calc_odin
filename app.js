'use strict';

const container = document.querySelector('.container');
const output = document.getElementById('calc');
const calcArr = [];
let result;
const PLUS = '+';
const MINUS = '-';
const MULTIPLY = '*';
const DIVIDE = '/';
const EQUAL = '=';

function add(a, b) {
  return (result = a + b);
}

function subtract(a, b) {
  return (result = a - b);
}

function multiply(a, b) {
  return (result = a * b);
}

function divide(a, b) {
  return (result = a / b);
}

function calculate(operator) {
  if (operator === PLUS) {
    add(calcArr[0], calcArr[2]);
  } else if (operator === MINUS) {
    subtract(calcArr[0], calcArr[2]);
  } else if (operator === MULTIPLY) {
    multiply(calcArr[0], calcArr[2]);
  } else if (operator === DIVIDE) {
    divide(calcArr[0], calcArr[2]);
  } else {
    console.log('something went wrong');
  }
}

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
  const dot = event.target.classList.contains('dot');

  const minus = event.target.classList.contains('op_minus');
  const plus = event.target.classList.contains('op_plus');
  const multiply = event.target.classList.contains('op_multiply');
  const divide = event.target.classList.contains('op_divide');

  const clear = event.target.classList.contains('clear');
  const equal = event.target.classList.contains('equal');

  // to string together numbers in display bar
  function display() {
    if (
      calcArr.includes(PLUS) ||
      calcArr.includes(MINUS) ||
      calcArr.includes(DIVIDE) ||
      calcArr.includes(MULTIPLY)
    ) {
      const secNum = calcArr
        .splice(2, calcArr.length)
        .reduce((a, b) => String(a + b), 0);
      calcArr.push(Number(secNum));
      output.textContent = calcArr;
      console.log(calcArr);
    } else {
      const secNum = calcArr
        .splice(0, calcArr.length)
        .reduce((a, b) => String(a + b), 0);
      calcArr.push(Number(secNum));
      output.textContent = calcArr;
      console.log(calcArr);
    }
  }

  function addOperand(op) {
    if (
      calcArr.includes(PLUS) ||
      calcArr.includes(MINUS) ||
      calcArr.includes(DIVIDE) ||
      calcArr.includes(MULTIPLY)
    ) {
      const secNum = calcArr
        .splice(2, calcArr.length)
        .reduce((a, b) => String(a + b), 0);
      calcArr.push(Number(secNum));
      calculate(calcArr[1]);
      calcArr.push(result);
      result = 0;
      if (op !== null) calcArr.push(op);
      calcArr.splice(0, 3);
      output.textContent = calcArr;
    } else {
      result = calcArr.reduce((a, b) => String(a + b), 0);
      calcArr.splice(0, calcArr.length);
      calcArr.push(Number(result));
      calcArr.push(op);
      result = 0;
      output.textContent = calcArr;
    }
  }

  function CLEAR() {
    calcArr.splice(0, calcArr.length);
    output.textContent = calcArr;
    result = 0;
  }

  if (zero) {
    calcArr.push(0);
    display();
  } else if (one) {
    calcArr.push(1);
    display();
  } else if (two) {
    calcArr.push(2);
    display();
  } else if (three) {
    calcArr.push(3);
    display();
  } else if (four) {
    calcArr.push(4);
    display();
  } else if (five) {
    calcArr.push(5);
    display();
  } else if (six) {
    calcArr.push(6);
    display();
  } else if (seven) {
    calcArr.push(7);
    display();
  } else if (eight) {
    calcArr.push(8);
    display();
  } else if (nine) {
    calcArr.push(9);
    display();
  } else if (dot) {
    calcArr.push('.');
    display();
  } else if (plus) {
    addOperand(PLUS);
  } else if (minus) {
    addOperand(MINUS);
  } else if (multiply) {
    addOperand(MULTIPLY);
  } else if (divide) {
    addOperand(DIVIDE);
  } else if (clear) {
    CLEAR();
  } else if (equal) {
    addOperand(null);
  }
});
