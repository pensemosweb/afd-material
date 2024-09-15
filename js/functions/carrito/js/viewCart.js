export function paintCartItem(item, container) {
  const li = document.createElement("li");
  li.textContent = item.name + " - " + item.price;
  li.id = item.id;
  li.classList.add("cart-item");
  container.appendChild(li);
}

// file:///C:/Users/HP/Documents/pensemosweb/AFD/afd-material/js/functions/carrito/index.html
// https://okso.app/
