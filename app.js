'use strict';

const container = document.querySelector('.container');
const output = document.getElementById('calc');
const calcArr = [];
const resultArr = [];

function add(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return resultArr.push(total);
}

function subtract(arr) {
  let total = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[0]) continue;
    total -= arr[i];
  }
  return resultArr.push(total);
}

function multiply(arr) {
  let total = 1;
  for (let i = 0; i < arr.length; i++) {
    total = total * arr[i];
  }
  return resultArr.push(total);
}

function divide(arr) {
  let total = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[0]) continue;
    total = total / arr[i];
  }
  return resultArr.push(total);
}

// maybe call it calculate
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

  // El seems redundant here, minus, plus...
  const minusEl = event.target.classList.contains('op_minus');
  const plusEl = event.target.classList.contains('op_plus');
  const multiplyEl = event.target.classList.contains('op_multiply');
  const divideEl = event.target.classList.contains('op_divide');

  const clear = event.target.classList.contains('clear');
  const equal = event.target.classList.contains('equal');

  // maybe call it addOperand or something similar
  function operands(op) {
    /* it would be nice if the operand could be a single variable
    so when you check it looks something like this
    if(operator === '+') ...

    also the operators could be constants, this would be clearer semantically
    const PLUS = '+'
    const MINUS = '+'

    if(operator === PLUS) ...

    this comment is also related to the operate() function
    */
    if (
      calcArr.includes('+') ||
      calcArr.includes('-') ||
      calcArr.includes('/') ||
      calcArr.includes('*')
    ) {
      const secNum = calcArr
        .splice(2, calcArr.length)
        .reduce((a, b) => String(a + b), 0);
      calcArr.push(Number(secNum));

      // we discussed this before, the operate function does not return anything, so this unshift is not needed, it just adds "undefined" to the array
      resultArr.unshift(operate(calcArr[1], [calcArr[0], calcArr[2]]));
      calcArr.push(resultArr[1]);
      calcArr.push(op);
      calcArr.splice(0, 3);
      output.textContent = calcArr;
      resultArr.splice(0, resultArr.length);
      console.log(resultArr, calcArr);
    } else {
      const resultArr = calcArr.reduce((a, b) => String(a + b), 0);
      calcArr.splice(0, calcArr.length);
      calcArr.push(Number(resultArr));
      calcArr.push(op);

      output.textContent = calcArr;
      console.log(calcArr, resultArr);
    }
  }

  if (zero) {
    calcArr.push(0);
    // this statement is repeated in every case, so it could be just once on the end
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
  } else if (dot) {
    calcArr.push('.');
    output.textContent = calcArr;
    console.log(calcArr);
  } else if (plusEl) {
    operands('+');
  } else if (minusEl) {
    operands('-');
  } else if (multiplyEl) {
    operands('*');
  } else if (divideEl) {
    operands('/');
  } else if (clear) {
    // it would be clearer if this was a function whose name would say it does
    // if you look at this currently it takes a while to figure out what is happening
    calcArr.splice(0, calcArr.length);
    resultArr.splice(0, resultArr.length);
    output.textContent = calcArr;
  } else if (equal) {
    // there is similar logic to this in two more places
    // try to extract it somehow 
    const secNum = calcArr
      .splice(2, calcArr.length)
      .reduce((a, b) => String(a + b), 0);
    calcArr.push(Number(secNum));
    // same as above, operate does not return anything
    resultArr.unshift(operate(calcArr[1], [calcArr[0], calcArr[2]]));
    calcArr.splice(0, calcArr.length);
    calcArr.push(resultArr[1]);
    resultArr.splice(0, resultArr.length);
    output.textContent = calcArr[0];
    console.log(resultArr, calcArr);
  }
});
