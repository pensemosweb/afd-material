const fs = require("fs");

function agregar(titulo, contenido) {
  const notas = cargarNotas();
  const notaDuplicada = notas.find((nota) => nota.titulo === titulo);
  if (!notaDuplicada) {
    notas.push({
      titulo: titulo,
      contenido: contenido,
    });
    guardarNotas(notas);
    console.log("Nota agregada");
  } else {
    console.log("Ya existe una nota con ese titulo");
  }
}

function cargarNotas() {
  try {
    const datosJSON = fs.readFileSync("notas.json", "utf-8");
    return JSON.parse(datosJSON);
  } catch (error) {
    return [];
  }
}

function guardarNotas(notas) {
  const datosJSON = JSON.stringify(notas);
  fs.writeFileSync("notas.json", datosJSON);
}

exports.agregar = agregar;

function consultar(titulo) {
  const notas = cargarNotas();
  const nota = notas.find((nota) => nota.titulo === titulo);
  if (nota) {
    console.log(nota.contenido);
  } else {
    console.log("No se encontro ninguna nota con ese titulo");
  }
}

exports.consultar = consultar;

function eliminar(titulo) {
  const notas = cargarNotas();
  const notasFiltradas = notas.filter((nota) => nota.titulo !== titulo);
  if (notas.length > notasFiltradas.length) {
    guardarNotas(notasFiltradas);
    console.log("Nota eliminada");
  } else {
    console.log("No se encontro ninguna nota con ese titulo");
  }
}

exports.eliminar = eliminar;
