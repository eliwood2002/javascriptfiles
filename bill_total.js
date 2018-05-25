function calculateBillTotal(preTaxAndTipAmount) {
  // your code here
  tax = 9.5;
  pretax = preTaxAndTipAmount;
  tip = 15;
  aftertip = pretax +(pretax*(tip/100.0));
  total = aftertip+(pretax*(tax/100.0));
  return total;
}
var output = calculateBillTotal(20);
console.log(output); // --> 24.9
