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

/// agregar todos los tipos de datos en un arreglo, incluyendo algunas funciones y objetos, e invocar esas funciones

carritoData.items.cantidad = 123456789;

const caculcarCarrito = {
  calcularTotalItem: function (precio, cantidad) {
    return precio * cantidad;
  },
  calcularGranTotal: function (data) {
    const items = data.items;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      item.total = this.calcularTotalItem(item.precio, item.cantidad);
      data.granTotal = data.granTotal + item.total;
    }
  },
  addItem: function (item) {
    carritoData.items.push(item);
  },
};

let persona = {
  nombre: "Juan",
  apellido: "Perez",
  edad: 30,
  direccion: {
    calle: "Av. Siempre viva",
    numero: 123,
    colonia: "Springfield",
    cp: 12345,
  },
  telefono: "1234567890",
  email: "",
};

persona.nombre = "Pedro";
persona.nss = "1234567890";

calcularCarrito.addItem({
  codigoArticulo: 1406159,
  descripcion: "Microbiot Fit 180 mg, 30 Cápsulas ",
  imagen:
    "https://www.farmaciasguadalajara.com/clorofila-xotzil-500-ml-1128558",
  precio: 549.99,
  cantidad: 4,
  Total: 0,
});

function addCarrito() {
  carritoData.items.push({
    codigoArticulo: 898989,
    descripcion: "Sifrol 0.5 mg, 30 Tabletas (Pramipexol)",
    image:
      "https://www.farmaciasguadalajara.com/aderogyl-vitaminas-a-c-y-d-fortalece-el-sistema-inmune-5-ampolletas-de-3-ml-943967",
    precio: 1399.9,
    cantidad: 1,
    total: 0,
  });
}

function crearCaculcarCarrito() {
  let calcularTotalItem = function (precio, cantidad) {
    return precio * cantidad;
  };

  let calcularGranTotal = function (data) {
    const items = data.items;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      item.total = calcularTotalItem(item.precio, item.cantidad);
      data.granTotal = data.granTotal + item.total;
    }
  };

  return {
    calcularTotalItem,
    calcularGranTotal,
  };
}

function crearCaculcarCarrito() {
  function calcularTotalItem(precio, cantidad) {
    return precio * cantidad;
  }

  function calcularGranTotal(data) {
    const items = data.items;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      item.total = calcularTotalItem(item.precio, item.cantidad);
      data.granTotal = data.granTotal + item.total;
    }
  }

  return {
    calcularTotalItem,
    calcularGranTotal,
  };
}
