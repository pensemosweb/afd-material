async function test(titulo, fnCallback) {
  try {
    await fnCallback();
    console.log(`✅ ${titulo}`);
  } catch (error) {
    console.error(`❌ ${titulo}`);
    console.log(error);
  }
}

test.describe = function (titulo, fnCallback) {
  console.log(`📋 ${titulo}`);
  fnCallback();
};

function expect(valorReal) {
  return {
    toBe(valorEsperado, mensaje) {
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
