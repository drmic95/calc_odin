// 'use strict';

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
const test5 = [10, 5];
operate('-', subtract, test5);

// improve operate function with less parameters
// try split to split the array of numbers based on +/-/* and / calc them individually and then return total
