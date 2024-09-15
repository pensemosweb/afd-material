class Pagina {
  contenedorCampos = "#contenedor-campos";

  constructor(nuevoContenedor) {
    this.contenedorCampos = nuevoContenedor;
  }

  encontrarCampo() {
    console.log(this.contenedorCampos);
  }
}

const p = new Pagina("header");
const p2 = new Pagina("main");
p.encontrarCampo();
p2.encontrarCampo();
