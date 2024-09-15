// Arrange Act Assert
function test(description, fnInvocarDentroDeTest) {
  //...
  console.log("TEST " + description);
  fnInvocarDentroDeTest();
}

test.describe = function (description, fnInvocarDentroDeDescribe) {
  //.....
  console.log("DESCRIBE " + description);
  fnInvocarDentroDeDescribe();
};


function sumar(a, b) {
  return a + b;
}

test.describe("Probando sumatoria", function () {
  test("Si a = 5 y b =5, sumar debe dar 10", function () {
    // Arrange
    const a = 5;
    const b = 1;
    // Act
    const result = sumar(a, b);

    // Assert
    if (result !== 10) {
      throw new Error("Sumar no funciona");
    }
  });
});

function saludar() {
  console.log("Hola");
}

saludar();

const greeting = function () {
  console.log("Greeting");
};

greeting();

function () {
  console.log("Anonima autoinvocada");
}()

(function () {
  console.log("Anonima autoinvocada");
})();

// arrow functions, funciones
const sumar = (a, b) => {
  return a + b;
};

const sumar = function(a,b) {
  return a + b;
}

function sumar(a, b) {
  return a + b;
}

function operation(a, b, loQueSea) {
  //...
  console.log("a", a);
  console.log("b", b);
  const result = loQueSea(a, b);

  return result;
}

operation(100, 500, sumar);

// falta restar, multiplicar y dividir
1. function sumar() {}
2. function () {}
3. () => {}

/*
function () {}
() => {}
 */


function operation(a, b, funcionAInvocar) {
  //...
  console.log("a", a);
  console.log("b", b);
  const result = funcionAInvocar(a, b);

  return result;
}

operation(100, 500, function (a, b) {
  return a + b;
});


function saludar(saludo) {
  console.log(saludo);
}

saludar("Hola");

function saludarConFn(prepararMensaje) {
  const mensaje = prepararMensaje("Hola");
  console.log(mensaje);
}

saludarConFn(function(preText) {
  return preText + " Mundo de funciones.";
});
