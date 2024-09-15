import { test, expect } from "@playwright/test";

test("login", async ({ page }) => {
  await page.goto("https://www.oysho.com/mx");

  await page.getByTestId("header-login-button").first().click();

  await expect(page).toHaveURL(/unified-login/);
});

test("Poner correo y continuar", async ({ page }) => {
  const email = "jaime.cervantes.ve@gmail.com";
  await page.goto("https://www.oysho.com/mx");
  await page.getByTestId("header-login-button").first().click();

  await expect(page).toHaveURL(/unified-login/);

  await page.getByRole("button", { name: "Aceptar todas las cookies" }).click();

  await page.getByTestId("input-style").first().fill(email);
  await page.getByTestId("continue-btn").first().click();

  await expect(page).toHaveURL(/previousUrl/);

  const emailInput = page.getByTestId("emailCreateAccount");
  await expect(emailInput).toHaveValue(email, { timeout: 15000 });
});

test("Zara login", async ({ page }) => {
  await page.goto("https://www.zara.com/mx");
  await page.getByRole("link", { name: "INICIAR SESIÓN" }).click();

  await page
    .getByRole("textbox", { name: /Email/i }) // es el nombre del label
    .fill("jaime.cervantes.ve@gmail.com");
});

test("buscar un articulo y agregarlo a carrito ", async ({ page }) => {
  await page.goto("https://www.zara.com/mx");
  await page.getByRole("search", { name: /Buscador de productos/ }).click();
  await expect(page).toHaveURL("https://www.zara.com/mx/es/search");
  await page
    .getByPlaceholder("Busca un artículo, color, colección…")
    .fill("jeans");
  await page.keyboard.press("Enter");
  await page
    .getByAltText(
      "JEANS ZW MARINE STRAIGHT TIRO ALTO BOLSILLOS - Azul de Zara - Imagen 0"
    )
    .click();
  await expect(page).toHaveURL(
    "https://www.zara.com/mx/es/jeans-zw-marine-straight-tiro-alto-bolsillos-p09632250.html?v1=311292214"
  );
  await page.getByText("MX 28 (US 6").click();
  await page
    .getByRole("button", { name: /Añadir/ })
    .first()
    .click();
  await page.getByText("Cesta").first().click();
  await expect(page).toHaveURL("https://www.zara.com/mx/es/shop/cart");
  await page.getByRole("button", { name: /CONTINUAR/ }).click();
});
