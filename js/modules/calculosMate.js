export function sumar(a, b) {
  return a + b;
}

export function restar(a, b) {
  return a - b;
}

export function dividirInterna(a, b) {
  return a / b;
}

export const dividir = dividirInterna;

// Los modulos tambien tienen acceso a las variables globales definidas con let, const o var
console.log(nombre, PI, apellidoPaterno);
