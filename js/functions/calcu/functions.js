const x = 20;
const y = 30;
const sumado = x + y;
console.log(sumado);
// f(x, y) = x + y
function sumar(x, y) {
  return x + y;
}

console.log(sumar(0,0));
console.log(sumar(30, 30));
console.log(sumar(100, 200));

function onAdd() {
  const num1 = document.querySelector('#primero');
  const num2 = document.querySelector('#segundo');

  const sumado = sumar(Number(num1.value), Number(num2.value));

  console.log(sumado)
}
