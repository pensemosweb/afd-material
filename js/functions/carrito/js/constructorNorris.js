class CheckoutStepTwoPage {
  constructor(page) {
    this.page = page;
    this.itemName = page.locator(".cart_item .inventory_item_name");
    this.itemPrice = page.locator(".cart_item .inventory_item_price");
    this.cartItem = page.locator(".cart_item");
    this.cartQuantity = page.locator(".cart_list .cart_quantity");
    this.summarySubtotal = page;
  }
}
