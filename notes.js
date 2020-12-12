// JavaScript Numbers

var totalUsers = 42;
var purchase = 46.99;

var sciNotPos = 123e5; // 12300000 add 5 zeros
var sciNotNeg = 123e-5; // 0.00123 5 decimal places

var numVal = 5 + 5; // can use + - * / % **
// javascript is only accurate up to 15 digits. It cannot keep track of more.

var badMath = 0.1 + 0.2; // JS isn't always 100% accurate
var goodMath = (0.1 * 10 + 0.2 * 10) / 10;

var stringToNumAdd = 10 + '5'; // =105. javascript will concatenate the numbers, not add
var stringToNumMult = 10 * '5'; // =50. javascript will change '5' to a number and multiply
var stringToNumSub = 10 - '5'; // =5. javascript will change '5' to a number and subtract
var stringToNumDiv = 10 / '5'; // =50. javascript will change '5' to a number and divide

console.log(stringToNumDiv);