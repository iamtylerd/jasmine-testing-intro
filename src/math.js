
function add (num1, num2) {
	return num1 + num2;
}
function subtract (num1, num2) {
	return num1 - num2;
}
function multiply (num1, num2) {
	return num1 * num2;
}
function divide (num1, num2) {
	return num1 / num2;
}
function square (num1) {
	return num1 * num1;
}
function squareroot (num1) {
	return Math.sqrt(num1);
}

var finalFunction = function (math, num1, num2) {
return math(num1, num2);
};
console.log(finalFunction(add, 2, 3));