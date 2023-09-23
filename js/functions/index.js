// Calculadora sencilla usando dos cantidades
// Similar a un restaurante, el cliente pide algo y el cocinero debe prepararlo

// datos de entrada === parametros
function sumar(numero1, numero2) {
  // desglose === algoritmo
  const resultado = numero1 + numero2;

  // datos de salida === return something
  return resultado;
}

// invocación === el cocinero prepara el platillo
const res1 = sumar(5, 6); // 11
const res2 = sumar(20, 30); // 50

console.log(res1);
console.log(res2);

function sumar(num1, num2) {
  const resultado = num1 + num2;
  console.log(resultado);

  return undefined;
}

function sumar() {
  const resultado = num1 + num2;

  return resultado;
}

sumar(5, 6) * sumar(20, 40);

function formarNombreCompleto(nombre, apellido) {
  return nombre + " " + apellido;
}
