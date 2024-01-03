function crearCarrito(data) {
  function calcularTotalItem(precio, cantidad) {
    return precio * cantidad;
  }

  function calcularTotalEachItem() {
    const items = data.items;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      item.total = calcularTotalItem(item.precio, item.cantidad);
    }
  }

  function calcularGranTotal() {
    const items = data.items;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      data.granTotal = data.granTotal + item.total;
    }
  }

  function eliminarUltimoItem() {
    data.items.pop();
    calcularTotales();
  }

  function eliminarPrimerItem() {
    data.items.shift();
    calcularTotales();
  }

  function calcularTotales() {
    data.granTotal = 0;
    calcularTotalEachItem();
    calcularGranTotal();
  }

  function addItem(item) {
    data.items.push(item);
    calcularTotales();
  }

  return {
    addItem,
    eliminarPrimerItem,
    eliminarUltimoItem,
  };
}

const carritoData = {
  items: [],
  granTotal: 0,
  descuento: 0,
  subtotal: 0,
};
const carritoNorris = crearCarrito();
carritoNorris.addItem({
  precio: 100,
  cantidad: 2,
  total: 0,
  codigoArticulo: 1,
  descripcion: "item 1",
  image:
    "https://www.farmaciasguadalajara.com/aderogyl-vitaminas-a-c-y-d-fortalece-el-sistema-inmune-5-ampolletas-de-3-ml-943967",
});

carritoNorris.addItem({
  precio: 200,
  cantidad: 2,
  total: 0,
  codigoArticulo: 2,
  descripcion: "item 2",
  image:
    "https://www.farmaciasguadalajara.com/aderogyl-vitaminas-a-c-y-d-fortalece-el-sistema-inmune-5-ampolletas-de-3-ml-943967",
});

// Escribir y ejecutar el código en el navegador
// agrega funcion "publica" para eliminar un elemento en cualquier posicion
