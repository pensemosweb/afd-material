import { expect } from "@playwright/test";

export class ZipCodePage {
  constructor(page) {
    this.page = page;
    this.link = this.page.getByRole("link", {
      name: "ingresa tu",
    });
    const frameCP = this.page.frameLocator(".modal-iframe-cp iframe");
    this.textLink = frameCP.getByRole("textbox", { name: /Código postal/i });
    this.button = frameCP.getByRole("button", { name: /Usar/i });
    this.zcLink = this.page.getByRole("link", { name: "95096" });
  }

  async enterZipCode() {
    await this.link.click();
    await this.textLink.fill("95096");
    await this.button.click();
    expect(this.zcLink).toBeVisible();
  }

  async deleteProductFromCart() {}
  async addProductToCart() {}
}
