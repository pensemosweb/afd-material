const person = { name: 'Jaime' };
const hola = 'hola';
const jesus = 'Jesus Vazquez';
const padre = 'Juan Cervantes';
const hasChildren = true;
const dancing = 'Bailando regueton';
let age;
const edad = 35;
age = edad;

function greet() {
  const message = 'Hola';
}

const patito = greet();
console.log(patito);

function returnUndefined() {
  console.log('HOLA');

  const duplicado8 = 8 * 2;
  const sumado8y5 = 8 + 5;

  console.log(duplicado8);
  console.log(sumado8y5);
}












/*

function add() {
  return 5 + 10;
}

const resultAdd = add();
console.log(resultAdd);

*/

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

console.log(add(200, 1000));
console.log(add(100, 50));
console.log(add(348738434, 34389493));

let resta1 = subtract(200, 1000);
let resta2 = subtract(100, 50);
let resta3 = subtract(348738434, 34389493);
console.log(resta1, resta2, resta3);

divide(200, 1000);
divide(100, 50);
divide(348738434, 34389493);

multiply(200, 1000);
multiply(100, 50);
multiply(348738434, 34389493);

