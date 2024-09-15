import { test, expect } from "./libreriaAsync.js";
import { multiplicar } from "./operaciones.js";

test("Entonces al Multiplicar 5 * 5 debe dar 25", async () => {
  const resultado = multiplicar(5, 5);
  expect(resultado).toBe(25);
});
