function hablarEspanol() {
  console.log("Hola");
}

let persona = {
  nombre: "Juan",
  esCasado: true,
  edad: 30,
  //hablarEspanol: true,
  conocimientos: {
    mate: true,
    espanol: true,
  },
};

// persona.hablarEspanol = hablarEspanol;
persona.hablarIngles = function () {
  return "Hello my name is " + this.nombre;
};

const body = document.querySelector("body");
body.className = "dark";

//document.querySelector("body").className = "dark";

const h1 = document.querySelector("h1");
h1.onclick = function () {
  alert("Hola");
};

const palabras = ["Hola", "Mundo", "Adios"];

const parrafos = document.querySelectorAll("p");

for (let posicion = 0; posicion < parrafos.length; posicion = posicion + 1) {
  parrafos[posicion].onclick = function () {
    alert("Hola soy el parrafo " + posicion);
  };
}
