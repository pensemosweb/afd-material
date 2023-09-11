class GetterAndSetters {
  constructor() {
    this.$propiedad = 'algo';
  }
  
  get miPropiedad() {
    return this.$propiedad;
  }

  set miPropiedad(valor) {
    this.$propiedad = valor;
  }
}

class GetterAndSetters {
  $propiedad = 'algo';

  get miPropiedad() {
    return this.$propiedad;
  }

  set miPropiedad(valor) {
    this.$propiedad = valor;
  }
}

const o = new GetterAndSetters();
o.miPropiedad;            // 'algo'
o.miPropiedad = 'otro';
o.miPropiedad;            // 'otro'