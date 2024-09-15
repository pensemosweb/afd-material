async function getCatFacts() {
  try {
    const response = await fetch("https://cat-fact.herokuapp.com/facts");
    const jsonData = await response.json();

    return jsonData;
  } catch (error) {
    console.warn(error);
  }
}

test.describe("Inicia conjunto de pruebas", () => {
  test("getCatFacts debe regresar un arreglo de facts", async () => {
    const facts = await getCatFacts();

    expect(facts instanceof Array).toBe(true, "facts no es instancia de Array");
  });

  test("getCatFacts debe regresar un arreglo de objetos con la propiedad text de tipo string", async () => {
    const result = await getCatFacts();
    const size = result.length;
    const isArray = Array.isArray(result);

    expect(isArray).toBe(true);
    expect(size).toBe(5);
    expect(typeof result[0].text).toBe("string");
  });

  test("getCatFacts debe regresar un arreglo de objetos", async () => {
    const factList = await getCatFacts();
    const isObject =
      typeof factList[0] === "object" &&
      !Array.isArray(factList[0]) &&
      factList[0] !== null;

    expect(isObject).toBe(true);
  });

  test("getCatFacts debe regresar 5 elementos", async () => {
    const factList = await getCatFacts();
    const size = factList.length;

    expect(size).toBe(5);
  });

  test("getCatFacts debe regresar una lista de objetos con propiedad text tipo string", async () => {
    const factList = await getCatFacts();

    checkFactTextsToBeString(factList, expect);
  });
});

function checkFactTextsToBeString(list, expect) {
  for (let i = 0; i < list.length; i++) {
    expect(typeof list[0].text).toBe(
      "string",
      "La propiedad text, no es un string"
    );
  }
}
