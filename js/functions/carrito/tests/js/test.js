import { test } from "./libreria.js";
import { multiplicar, dividir, sumar, restar } from "./operaciones.js";

test.describe("Cuando realizo operaciones basicas con dos numeros", function () {
  test("Entonces al Multiplicar 5 * 5 debe dar 25", function () {
    // Arrrange
    const a = 5;
    const b = 5;

    // Act
    const result = multiplicar(a, b);

    // Assert
    if (result !== 25) {
      throw new Error("Multiplicar no funciona");
    }
  });

  test("Entonces al dividir 5 / 5 debe dar 1", function () {
    // Arrrange
    const a = 5;
    const b = 5;

    // Act
    const result = dividir(a, b);

    // Assert
    if (result !== 1) {
      throw new Error("Dividir no funciona");
    }
  });

  test("Entonces al sumar 5 + 5 debe dar 10", function () {
    // Arrrange
    const a = 5;
    const b = 5;

    // Act
    const result = sumar(a, b);

    // Assert
    if (result !== 10) {
      throw new Error("Sumar no funciona");
    }
  });

  test("Entonces al restar  5 - 5 debe dar 0", function probarRestar() {
    // Arrrange
    const a = 5;
    const b = 5;

    // Act
    const result = restar(a, b);

    // Assert
    if (result !== 0) {
      throw new Error("Restar no funciona");
    }
  });
});
