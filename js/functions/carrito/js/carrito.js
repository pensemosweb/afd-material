function createCarrito(data) {
  function calculateSingleTotal(price, quantity) {
    return price * quantity;
  }

  function calculateEachITotalItem() {
    const items = data.items;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      item.total = calculateSingleTotal(item.price, item.quantity);
    }
  }

  function calcularGrandTotal() {
    const items = data.items;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      data.grandTotal = data.grandTotal + item.total;
    }
  }

  function removeLastItem() {
    data.items.pop();
    calculateAllTotals();
  }

  function removeFirstItem() {
    data.items.shift();
    calculateAllTotals();
  }

  function calculateAllTotals() {
    data.grandTotal = 0;
    calculateEachITotalItem();
    calcularGrandTotal();
  }

  function addItem(item) {
    data.items.push(item);
    calculateAllTotals();
  }

  function getData() {
    return data;
  }

  function removeItem(index) {
    data.items.splice(index, 1);
    calculateAllTotals();
  }

  function removeItemById(id) {
    const items = data.items;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.id === id) {
        items.splice(i, 1);
        calculateAllTotals();
        break;
      }
    }
  }

  return {
    addItem,
    removeFirstItem,
    removeLastItem,
    removeItem,
    removeItemById,
    getData,
  };
}
