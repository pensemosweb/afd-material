import products from "../data/products.js";
import data from "../data/carrito.js";
import createCart from "./carrito.js";
import { paintProducts } from "./viewProducts.js";
import { paintCartItem } from "./viewCart.js";

const productList = document.querySelector("#products");
const cartList = document.querySelector("#carrito");
const carrito = createCart(data);

paintProducts(products.items, productList);

productList.addEventListener("click", function onProductClick(event) {
  if (event.target.classList.contains("add-action")) {
    const id = Number(event.target.dataset.id);
    let itemEncontrado = null;

    for (let i = 0; i < products.items.length; i++) {
      const item = products.items[i];
      if (item.id === id) {
        itemEncontrado = item;
        break;
      }
    }

    carrito.addItem(itemEncontrado);
    paintCartItem(
      {
        id: itemEncontrado.id,
        name: itemEncontrado.name,
        price: itemEncontrado.price,
      },
      cartList
    );
  }
});
