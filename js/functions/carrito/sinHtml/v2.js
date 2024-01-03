const carritoData = {
  items: [
    {
      codigoArticulo: 1406159,
      descripcion: "Microbiot Fit 180 mg, 30 Cápsulas ",
      imagen:
        "https://www.farmaciasguadalajara.com/clorofila-xotzil-500-ml-1128558",
      precio: 549.99,
      cantidad: 4,
      total: 0,
    },
    {
      codigoArticulo: 1301128,
      descripcion:
        "Trelegy Polvo para Inhalación 100mcg/62.5mcg/25mcg, 30 Dosis",
      image:
        "https://www.farmaciasguadalajara.com/histofil-4000ui-60-tabletas-1259571",
      precio: 1244.0,
      cantidad: 1,
      total: 0,
    },
    {
      precio: 899.9,
      cantidad: 1,
      total: 0,
      codigoArticulo: 1301128,
      descripcion:
        "Trelegy Polvo para Inhalación 100mcg/62.5mcg/25mcg, 30 Dosis",
      image:
        "https://www.farmaciasguadalajara.com/aderogyl-vitaminas-a-c-y-d-fortalece-el-sistema-inmune-5-ampolletas-de-3-ml-943967",
    },
  ],
  subtotal: 3000.0,
  descuento: 89.0,
  granTotal: 0.0,
};

const carritoV2 = {
  data: null,
  calcularTotalItem: function (precio, cantidad) {
    return precio * cantidad;
  },
  calcularTotalEachItem: function () {
    const items = this.data.items;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      item.total = this.calcularTotalItem(item.precio, item.cantidad);
    }
  },
  calcularGranTotal: function () {
    const items = this.data.items;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      this.data.granTotal = this.data.granTotal + item.total;
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
    this.data.granTotal = 0;
    this.calcularTotalEachItem();
    this.calcularGranTotal();
  },
  setearData: function (dataAsetear) {
    this.data = dataAsetear;
  },
  addItem: function (item) {
    this.data.items.push(item);
    this.calcularTotales();
  },
};

carritoV2.setearData(carritoData);
carritoV2.addItem({
  image:
    "https://www.farmaciasguadalajara.com/aderogyl-vitaminas-a-c-y-d-fortalece-el-sistema-inmune-5-ampolletas-de-3-ml-943967",
  precio: 1000.9,
  cantidad: 1,
  codigoArticulo: 1301128,
  descripcion: "Trelegy Liquido para Inhalación 100mcg/62.5mcg/25mcg, 30 Dosis",
  total: 0,
});

// Tres formas de organizar y reutilizar el código
// 1. Funciones, composicion de funciones
// 2. Clases, herencia de clases
// 3. Objetos, composicion de objetos
