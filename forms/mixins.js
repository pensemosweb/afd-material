class Persona {
  constructor() {
    this.name = 'Jaime';
  }

  hablar() {
    return 'Hablando..';
  }
}

function programadorMixin(clasePadre) {
  return class Hija extends clasePadre {
    constructor() {
      super();
      this.embarazada = false;
    }

    programar() {
      return 'Programando...';
    }
  }
}

class JaimeProgramador extends programadorMixin(Persona) {
  constructor() {
    super();
  }

  ensenar() {
    return 'Enseñando...'
  }
}


