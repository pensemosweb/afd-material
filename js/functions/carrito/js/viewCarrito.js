const list = document.querySelector("#carrito");

for (let i = 0; i < carritoData.items.length; i++) {
  const item = carritoData.items[i];
  const li = document.createElement("li");
  li.textContent = item.name + " - " + item.price;
  li.id = item.id;
  li.classList.add("cart-item");
  list.appendChild(li);
}

function renderCarrito() {}
