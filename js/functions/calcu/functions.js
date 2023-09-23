function suma(num1, num2) {
  const resultado = num1 + num2;

  return resultado;
}

function onAdd() {
  const n1 = document.querySelector("#primero").value;
  const n2 = document.querySelector("#segundo").value;

  const resultado = suma(parseFloat(n1), parseFloat(n2));

  document.querySelector("#result").innerHTML = resultado;
}

// Esta funcion obtendra el nombre completo de una lista de
// personas, donde cada persona tendra la siguiente notacion:
// { nombre: "Jaime",
// apellidoMaterno: "Velasco",
// apellidoPaterno: "Cervantes"
//  edad: 35,
//  estatura: 1.68
//  ...
// }

// regresar ["Jaime Cervantes Velasco", "Jesus Vazquez Lobato", ...]
function getFullNames(people) {
  const names = people.map(function doForEachITem(item) {
    return item.firstName + " " + item.lastName + " " + item.secondLastName;
  });

  return names;
}

const nameList = ["Jaime", "Jesus", "Juan", "Jose", "Gabriel"];
const numList = [1, 2, 3, 4, 5, 6, 7];
const boolList = [false, true, false, false, true, true];
const lista = [
  {
    firstName: "Jaime",
    lastName: "Cervantes",
    secondLastName: "Velasco",
  },
  {
    firstName: "Jesus",
    lastName: "Vazquez",
    secondLastName: "Lobato",
  },
];

getFullNames(lista);

// f(x, y) = x + y
function sumar(x, y) {
  return x + y;
}

console.log(sumar(0, 0));
console.log(sumar(30, 30));
console.log(sumar(100, 200));

/*
function onAdd() {
  const num1 = document.querySelector('#primero');
  const num2 = document.querySelector('#segundo');

  const sumado = sumar(Number(num1.value), Number(num2.value));

  console.log(sumado)
}
*/
