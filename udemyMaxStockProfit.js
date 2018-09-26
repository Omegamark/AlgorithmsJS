var stocks = [32, 46, 26, 38, 40, 48, 42, 12];

function maxStockProfit(stocks) {
   let maxProfit = -1;
   let buyPrice = 0;
   let sellPrice = 0;

   // Use this as a flag for when the buy price should change.
   let changeBuyPrice = true;

   for (let i = 0; i < stocks.length; i++) {
     if ( changeBuyPrice )  buyPrice = stocks[i];
       sellPrice = stocks[i+1];

       if (sellPrice < buyPrice) {
           changeBuyPrice = true;
       } else {
           let tempProfit = sellPrice - buyPrice;
           if (tempProfit > maxProfit) maxProfit = tempProfit;
           changeBuyPrice = false;

       }
   }
   return maxProfit;
}

console.log(maxStockProfit(stocks))