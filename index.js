// each item in cart, with price in $
var item1 = 13;
var item2 = 15.5;
var item3 = 20;
var item4 = 7.5;
var item5 = 16;
var item6 = 6.5;

var cartTotal = item1 + item2 + item3 + item4 + item5 + item6;
var coupon25 = 0.25;
var priceAfterDiscount = parseFloat((cartTotal - (cartTotal * coupon25)).toFixed(2));
var taxes = parseFloat((priceAfterDiscount * 0.0775).toFixed(2));

var finalPrice = parseFloat((priceAfterDiscount + taxes).toFixed(2));

console.log(finalPrice);