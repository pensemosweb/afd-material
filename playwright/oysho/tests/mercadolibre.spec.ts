import { test, expect } from "@playwright/test";
//import { enterZipCode } from "./enterZipCode";
import { ZipCodePage } from "./ZipCodePage";

test("set postal code in mercadolibre", async ({ page }) => {
  await page.goto("https://mercadolibre.com.mx");

  //await enterZipCode(page, expect);

  const pageInst = new ZipCodePage(page);
  await pageInst.enterZipCode();
  // await pageInst.deleteZipCode();
  // await pageInst.updateZipCode();
});
