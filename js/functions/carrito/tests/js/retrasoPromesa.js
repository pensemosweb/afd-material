function getFactsWithThen() {
  return fetch("https://cat-fact.herokuapp.com/facts").then(function (
    response
  ) {
    return response.json();
  });
}

function getAndShowCatFactsWithThen() {
  getFactsWithThen()
    .then((facts) => {
      console.log(facts);
    })
    .catch((err) => {
      console.log(err);
    });
}

getAndShowCatFactsWithThen();

// test.describe("Cuando el usario quiere conseguri datos de gatos en la pagina de inicio", function () {
//   test("Then getCatFacts debe regresar un Arreglo de datos de gatos", async function () {
//     const datos = await getCatFacts();

//     expect(datos.length).toBeGreaterThan(0);
//   });
// });

//getFactsWithPromise();

const miPromesaEjemplo = {
  then: function () {},
  catch: function () {},
  finally: function () {},
};

async function getCatFacts() {
  try {
    const response = await fetch("https://cat-fact.herokuapp.com/facts");
    const jsonData = await response.json();

    return jsonData;
  } catch (error) {
    console.warn(error);
  }
}

// console.log("Hola");
// const result = await getCatFacts();
// console.log(result);

async function getAndShowCatFacts() {
  const facts = await getCatFacts();
  console.log("Datos de gatos:");
  console.log(facts);
}

function esHombre(persona) {
  if (persona.sexo === "mujer") {
    return false;
  }

  if (persona.sexo === "hombre") {
    return true;
  }

  return false;
}

/*

class Promise {
  constructor() {
    console.log("constructor");
  }

  then() {}

  catch() {}
}

function Promise(fnResolverORechazar) {
  //...

  const resolve = function () {};
  const reject = function () {};
  fnResolverORechazar(resolve, reject);
}
Promise.prototype.then = function () {};
Promise.prototype.catch = function () {};
 */

const miPromesaEjemplo2 = {
  then: function () {},
  catch: function () {},
  finally: function () {},
};

function definePromesa(res, rej) {
  setTimeout(function () {
    rej("Hola mundo de promesas rechazar");
  }, 5000);
}

function retraso() {
  return new Promise(definePromesa);
}

retraso(1000).then(console.log).catch(console.log);

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map;

const m = new Map();

const wm = new WeakMap();
