const productList = document.querySelector("#products");

for (let i = 0; i < products.items.length; i++) {
  const item = products.items[i];

  const li = document.createElement("li");
  li.textContent = item.name + " - " + item.price;
  li.id = item.id;
  li.classList.add("product-item");

  const button = document.createElement("button");
  button.textContent = "Agregar";
  button.classList.add("add-action");

  li.appendChild(button);

  productList.appendChild(li);
}
// DOM Document Object Model
// backtick ``  ~ `

productList.addEventListener("click", function (event) {
  if (event.target.classList.contains("add-action")) {
    const liParent = event.target.closest(".product-item");
    const id = liParent.id;
    const item = products.items.find(function (item) {
      return item.id === Number(id);
    });
    carrito.addItem(item);
    //renderCarrito();
  }
});
