import { multiplicar, dividir, sumar, restar } from "./operaciones.js";

export function probarMultiplicar() {
  // Arrrange
  const a = 5;
  const b = 5;

  // Act
  const result = multiplicar(a, b);

  // Assert
  if (result !== 25) {
    throw new Error("Multiplicar no funciona");
  }
}

export function probarDividir() {
  // Arrrange
  const a = 5;
  const b = 5;

  // Act
  const result = dividir(a, b);

  // Assert
  if (result !== 1) {
    throw new Error("Dividir no funciona");
  }
}

export function probarSumar() {
  // Arrrange
  const a = 5;
  const b = 5;

  // Act
  const result = sumar(a, b);

  // Assert
  if (result !== 10) {
    throw new Error("Sumar no funciona");
  }
}

export function probarRestar() {
  // Arrrange
  const a = 5;
  const b = 5;

  // Act
  const result = restar(a, b);

  // Assert
  if (result !== 0) {
    throw new Error("Restar no funciona");
  }
}
