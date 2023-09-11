class StaticProps {
  static $propiedad = 'algo';

  static get miPropiedad() {
    return StaticProps.$propiedad;
  }

  static set miPropiedad(valor) {
    StaticProps.$propiedad = valor;
  }
}

StaticProps.miPropiedad;            // 'algo'
StaticProps.miPropiedad = 'otro';
StaticProps.miPropiedad             // 'otro'