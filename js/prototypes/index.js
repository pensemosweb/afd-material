function EnsaladaBase() {
  this.conLechuga = true;
  this.conTomate = true;
}

EnsaladaBase.prototype.preparar = function () {
  console.log("Corta la lechuga y el tomate. Despues mezcla todo");
};

function EnsaladaDePollo() {
  EnsaladaBase.call(this); // Function.prototype.call
  this.conPollo = true;
}

EnsaladaDePollo.prototype.agregarExtras = function () {
  console.log("Agregar aderezo ranch y aceitunas");
};

EnsaladaDePollo.prototype.pesarPollo = function () {
  console.log("Pesar el pollo para calcular calorias");
};

Object.setPrototypeOf(EnsaladaDePollo.prototype, EnsaladaBase.prototype);

const ensaladaPollo = new EnsaladaDePollo();
const ep = new EnsaladaDePollo();

class EnsaladaBase {
  constructor() {
    this.conLechuga = true;
    this.conTomate = true;
  }

  preparar() {
    console.log("Corta la lechuga y el tomate. Despues mezcla todo");
  }

  entregar(cliente) {
    console.log("entregar a " + cliente);
  }
}

// Object.setPrototypeOf(EnsaladaDePollo.prototype, EnsaladaBase.prototype);
class EnsaladaDePollo extends EnsaladaBase {
  constructor() {
    super();
    this.conPollo = true;
  }

  agregarExtras() {
    console.log("Agregar aderezo ranch y aceitunas");
  }

  pesarPollo() {
    console.log("Pesar el pollo para calcular calorias");
  }
}

const ensaladaPollo2 = new EnsaladaDePollo();
ensaladaPollo2.conTomate = false;
ensaladaPollo2.entregar("Norris");
const ensaladaPollo3 = new EnsaladaDePollo();
const ensaladaPollo4 = new EnsaladaDePollo();
