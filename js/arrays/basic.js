let arreglo = [
  true,
  "Bubba",
  null,
  undefined,
  Symbol(20),
  99999n,
  8768678,
  { nombre: "Bubba" },
  ["limon", "manzana"],
  function sumar(a, b) {
    return a + b;
  },
];

let bubba = {
  nombre: "Bubba",
  edadAnios: 5,
  estaturaCM: 70,
  colorOjos: "negros",
  Dueño: "Nora Macias ",
  corre: "yes",
  direccion: {
    colonia: "abanico",
    calle: "san gil ",
    numero: "206",
  },
  juguetes: ["pelota", "oso", "kong", "otro", "cuerda"],
};

bubba.ejemploArr = arreglo;

let otroPerrito = {};
otroPerrito.ejemploArr = arreglo;

let bubba2 = { nombre: "Bubba", edad: 5 };
bubba2.color = "Blanco";

delete bubba2.color;
bubba2.color = "Negro";
