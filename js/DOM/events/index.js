element.addEventListener(
  "click",
  function () {
    alert("hola");
  },
  { capture: false, once: false, passive: false, signal: null }
);
element.addEventListener("click", function (event) {
  event.preventDefault();
});
element.addEventListener("click", function (event) {
  console.log("Tercera funcionalidad");
});
