function clearField(selector) {
  const field = document.querySelector(selector);
  field.value = "";

  return undefined;
}

function sendMessage(event) {
  event.preventDefault();
  const nombre = document.querySelector("#name").value;
  const apellido = document.querySelector("#lastname").value;

  const fullName = formarNombreCompleto(nombre, apellido);
  alert(fullName);

  clearField("#name");
  clearField("#phone");
  clearField("#email");
}

function avoidDefaultBehaviour(patito) {
  patito.preventDefault();
}

function formarNombreCompleto(nombre, apellido) {
  return nombre + " " + apellido;
}

const form = document.querySelector("form");

form.onsubmit = function (e) {
  e.preventDefault();
  alert("onsubmit");
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Hola");
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Hola2");
});
