import { test, expect } from "@playwright/test";
import { search, borrar } from "./busquedas";
import PageBusquedas from "./PageBusquedas.js";

test("buscar vestido", async ({ page }) => {
  //const inst = new PageBusquedas(page);
  await search(page, "vestido");
});
test("buscar jeans", async ({ page }) => {
  const inst = new PageBusquedas(page);
  await inst.search(page, "jeans");
});
