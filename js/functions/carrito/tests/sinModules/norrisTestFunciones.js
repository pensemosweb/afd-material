function test(description, fnInvocarDentroDeTest) {
  //...
  console.log("Resta " + description);
  fnInvocarDentroDeTest();
}

test.describe = function (description, fnInvocarDentroDeDescribe) {
  //...
  // mas codigo
  // mas codigo
  // mas codigo
  console.log("Restar dos numeros  " + description);
  fnInvocarDentroDeDescribe();
};

function resta(a, b) {
  return a - b;
}

test.describe("Probando la resta a-b'", function () {
  test(" restar a -b debe dar cierto valor ", function () {
    // arrange
    const a = 600;
    const b = 99;

    // act
    const result = resta(a, b);

    // assert
    if (result !== 501) {
      throw new error("resta no funciona");
    }
  });
});
