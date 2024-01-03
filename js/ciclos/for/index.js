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

// Usuario --- descuentos/promociones --- carrito --- carritoData

// historial/compras

function calcularTotalItem(precio, cantidad) {
  return precio * cantidad;
}

function calcularTotalEachItem(itemsCarrito) {
  for (let i = 0; i < itemsCarrito.length; i++) {
    const item = itemsCarrito[i];
    item.total = calcularTotalItem(item.precio, item.cantidad);
  }
}

calcularTotalEachItem(carritoData.items);

function calcularGranTotal(itemsCarrito) {
  for (let i = 0; i < itemsCarrito.length; i++) {
    const item = itemsCarrito[i];
    carritoData.granTotal = carritoData.granTotal + item.total;
  }
}

calcularGranTotal(carritoData.items);

function contador(inicio, veces) {
  let suma = inicio;
  for (let i = 1; i <= veces; i++) {
    suma = suma + 1;
  }

  console.log(suma);

  return undefined;
}

const carrito = {
  calcularTotalItem: function (precio, cantidad) {
    return precio * cantidad;
  },
  calcularEachTotalItem: function (itemsCarrito) {
    for (let i = 0; i < itemsCarrito.length; i++) {
      const item = itemsCarrito[i];
      item.total = this.calcularTotalItem(item.precio, item.cantidad);
    }
  },
  calcularGranTotal: function (itemsCarrito) {
    for (let i = 0; i < itemsCarrito.length; i++) {
      const item = itemsCarrito[i];
      carritoData.granTotal = carritoData.granTotal + item.total;
    }
  }
};

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
  }
};

const jaime = {
  nombre: "Jaime",
  apellido: "Cruz",
  edad: 30,
  saludar: function () {
    console.log(`Hola soy ${this.nombre} ${this.apellido}`);
  },
};


function nombreDeFunction(param1, param2) {
  return param1 + param2;
}


function(param1, param2) {
  return param1 + param2;
}


let miArray = [];
let miObjeto = {};
let miFuncion = function (param1, param2) {
  return param1 + param2;
}

function miFuncion(param1, param2) {
  return param1 + param2;
}

miFuncion(1, 100);
