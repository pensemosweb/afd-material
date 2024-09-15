test.describe = function (description, fnInvocarDentroDeDescribe) {
  //.....
  console.log("vamos a multiplicar dos numeros  " + description);
  fnInvocarDentroDeDescribe();
};

function test(description, fnInvocarDentroDeTest) {
  //...
  console.log("debe dar resultado 59400 " + description);
  fnInvocarDentroDeTest();
}

function multiplicar(a, b) {
  return a * b;
}

test.describe("aqui va la descripcion que se imprimira  operación de multiplicar dos numeros  ", function () {
  test(" como resultado de la multiplicación será de dos numeros a*b ", function () {
    // arrange
    const a = 600;
    const b = 99;

    // act
    const result = multiplicar(a, b);

    // assert
    if (result !== 59400) {
      throw new error("multiplicar  no funciona");
    }
  });
});
