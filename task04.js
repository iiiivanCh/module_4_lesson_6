"use strict"

const allCashboxs = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
];

const getAveragePriceGoods = (allCashboxs) => {

  let lotSum = 0;
  let sum = 0;
  let AveradgePrice = 0;

  for (let i = 0; i < allCashboxs.length; i++) {
      sum += allCashboxs[i][0] * allCashboxs[i][1];
      lotSum += allCashboxs[i][0];
  }
  AveradgePrice = sum / lotSum;
  AveradgePrice = AveradgePrice.toFixed(2);
  console.log(AveradgePrice);
}

getAveragePriceGoods(allCashboxs);