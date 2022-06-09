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

  let lot = 0;
  let sum = 0;
  let AveradgePrice = 0;

  // for (let i = 0; i < allCashboxs.length; i++) {
  //   sum += allCashboxs[i][1];
  //   lot += allCashboxs[i][0];
  // }

allCashboxs.forEach((_element, i) => {
  sum += allCashboxs[i][1];
  lot += allCashboxs[i][0];
});

  AveradgePrice = sum / lot;
  AveradgePrice = AveradgePrice.toFixed(2);
  console.log(AveradgePrice);
}

getAveragePriceGoods(allCashboxs);