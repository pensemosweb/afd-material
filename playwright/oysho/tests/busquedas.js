export async function search(page, textToSearch) {
  await page.goto("https://www.zara.com/mx");
  await page.getByRole("search", { name: /Buscador de productos/ }).click();
  await expect(page).toHaveURL("https://www.zara.com/mx/es/search");
  const searchFilter = page.getByPlaceholder(
    "Busca un artículo, color, colección…"
  );
  await searchFilter.fill(textToSearch);
  await searchFilter.press("Enter");
}

export async function SearchByCategory() {}
