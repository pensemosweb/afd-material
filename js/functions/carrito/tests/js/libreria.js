test.describe = function (description, fnInvocarDentroDeDescribe) {
  console.log("DESCRIBE " + description);
  fnInvocarDentroDeDescribe();
};

async function test(description, fnInvocarDentroDeTest) {
  try {
    await fnInvocarDentroDeTest();
    console.log(`✅ ${description}`);
  } catch (error) {
    console.error(`❌ ${description}`);
    console.log(error);
  }
}

function expect(valorReal) {
  return {
    toBe: function (valorEsperado, mensaje) {
      if (valorReal !== valorEsperado) {
        throw new Error(
          `${
            mensaje ? mensaje + ": " : ""
          }${valorReal} no es igual a ${valorEsperado}`
        );
      }
    },
  };
}
