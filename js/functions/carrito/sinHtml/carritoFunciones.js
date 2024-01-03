function crearCarrito(data) {
  return {
    calcularTotalItem: function (precio, cantidad) {
      return precio * cantidad;
    },
    calcularTotalEachItem: function () {
      const items = data.items;
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        item.total = this.calcularTotalItem(item.precio, item.cantidad);
      }
    },
    calcularGranTotal: function () {
      const items = data.items;
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        data.granTotal = data.granTotal + item.total;
      }
    },
    eliminarUltimoItem: function (items) {
      items.pop();
      this.calcularTotales(items);
    },
    eliminarPrimerItem: function (items) {
      items.shift();
      this.calcularTotales(items);
    },
    calcularTotales: function () {
      data.granTotal = 0;
      this.calcularTotalEachItem();
      this.calcularGranTotal();
    },
    addItem: function (item) {
      data.items.push(item);
      this.calcularTotales();
    },
  };
}

const carritoNorris = crearCarrito({
  items: [],
  granTotal: 0,
  descuento: 0,
  subtotal: 0,
});
carritoNorris.addItem({ precio: 100, cantidad: 2 });
