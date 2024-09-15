export async function enterZipCode(page, expect) {
  const link = page.getByRole("link", { name: "ingresa tu" });
  await link.click();

  const frameCP = page.frameLocator(".modal-iframe-cp iframe");

  const textLink = frameCP.getByRole("textbox", { name: /Código postal/i });
  await textLink.fill("95096");

  const button = frameCP.getByRole("button", { name: /Usar/i });

  await button.click();

  const zcLink = page.getByRole("link", { name: "95096" });
  expect(zcLink).toBeVisible();
}
