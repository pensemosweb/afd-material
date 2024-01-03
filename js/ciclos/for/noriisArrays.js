const carritoData = {
  items: [
    {
      codigoArticulo: 1406159,
      descripcion: "Microbiot Fit 180 mg, 30 Cápsulas ",
      imagen:
        "https://www.farmaciasguadalajara.com/clorofila-xotzil-500-ml-1128558",
      precio: 549.99,
      cantidad: 4,
      Total: 0,
      calcularTotalItem2: function calcularTotalItem2() {
        return this.precio * this.cantidad;
      },
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
      codigoArticulo: 1301128,
      descripcion:
        "Trelegy Polvo para Inhalación 100mcg/62.5mcg/25mcg, 30 Dosis",
      image:
        "https://www.farmaciasguadalajara.com/aderogyl-vitaminas-a-c-y-d-fortalece-el-sistema-inmune-5-ampolletas-de-3-ml-943967",
      precio: 899.9,
      cantidad: 1,
      total: 0,
    },
  ],
  subtotal: 3000.0,
  descuento: 89.0,
  granTotal: 0.0,
};

carritoData.items[0].notifyStock = true;
carritoData.items[0].controlMedication = null;
carritoData.items[0].Abrevation = Symbol("ALR");
carritoData.items[0].Patente = undefined;
carritoData.items[0].Bigint = 9007199254740991n;
carritoData.items[0].calcularTotalItem2 = function calcularTotalItem2() {
  return this.precio * this.cantidad;
};

const item0 = carritoData.items[0];
item0.calcularTotalItem2();

const arreglo = [
  1,
  null,
  undefined,
  "hola",
  {},
  Symbol(true),
  9889797n,
  function () {
    console.log("Hola");
  },
  [1, 2, 3],
];

const arreglo2 = [];
arreglo2.push(1);
arreglo2.push({});
