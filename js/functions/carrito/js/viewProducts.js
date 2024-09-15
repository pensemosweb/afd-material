export function paintProducts(items, container) {
  // container --> <ul id="products"></ul>
  // container --> //HTMLElement -> HTMLUListElement -> {}
  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    const li = document.createElement("li");
    li.textContent = item.name + " - " + item.price;
    li.id = item.id;
    li.classList.add("product-item");

    const button = document.createElement("button");
    button.textContent = "Agregar";
    button.classList.add("add-action");
    button.dataset.id = item.id;

    li.appendChild(button);

    container.appendChild(li);
  }
}
