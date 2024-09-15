class EnsaladaBase {
  conLechuga = true;
  conTomate = true;

  preparar() {
    console.log("Corta la lechuga y el tomate. Despues mezcla todo");
  }

  entregar(cliente) {
    console.log("entregar a " + cliente);
  }
}

class EnsaladaDePollo extends EnsaladaBase {
  constructor() {
    super(); // Llamado al constructor de la clase padre (EnsaladaBase).
    this.conPollo = true;
  }

  pesarPollo() {
    console.log("Pesar el pollo para calcular calorias");
  }
}

class EnsaladaRusa extends EnsaladaDePollo {
  constructor() {
    super();
    this.conPapa = true;
  }

  agregarAderezos() {
    console.log("Agregar mayonesa y crema");
  }
}

const eB = new EnsaladaRusa();
