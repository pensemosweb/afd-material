element.addEventListener("click", function () {
  alert("hola");
});
element.addEventListener("click", function (event) {
  event.preventDefault();
});
element.addEventListener("click", function (event) {
  console.log("Tercera funcionalidad");
});
