export class PageBusqueda {
  constructor(page) {
    this.page = page;
  }

  async search(textToSearch) {
    await this.page.goto("https://www.zara.com/mx");
    await this.page
      .getByRole("search", { name: /Buscador de productos/ })
      .click();
    await expect(page).toHaveURL("https://www.zara.com/mx/es/search");
    const searchFilter = page.getByPlaceholder(
      "Busca un artículo, color, colección…"
    );
    await searchFilter.fill(textToSearch);
    await searchFilter.press("Enter");
  }
}
