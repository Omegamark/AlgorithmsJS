var stocks = [32, 46, 26, 38, 40, 48, 42, 12];

function maxStockProfit(array) {
  // find the max difference from one stock
  let maxStock = {};
  let minStock = {};
  // Place the first 2 items in the 0 and 1 place.
    if (array[0] < array[1]) {
      minStock.value = array[0];
      minStock.i = 0;
      maxStock.value = array[1];
      minStock.i = 1;
    } else {
      minStock.value = array[1];
      minStock.i = 1;
      maxStock.value = array[0];
      minStock.i = 0;
    }
  for (let i = 2; i < array.length; i++) {
    if (array[i] > maxStock.value) {
        maxStock.i = i;
        maxStock.value = array[i];
    } else if (array[i] < minStock.value) {
        minStock.i = i;
        minStock.value = array[i]
    }
  }
  console.log(maxStock, minStock)
}

maxStockProfit(stocks)