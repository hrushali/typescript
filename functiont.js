// // return type
// The type of the value returned by the function can be explicitly defined.
function gettime() {
    return new Date().getTime();
}
console.log(gettime());
//void return type
function printHello() {
    console.log('Hello!');
}
console.log(printHello());
//parameters
function multiply(a, b) {
    return a * b;
}
console.log(multiply(10, 20));
//optional para
function multiplyoptional(a, b, c) {
    return a + b + (c || 0);
}
console.log(multiplyoptional(10, 20));
//default para
function pow(value, exponent) {
    if (exponent === void 0) { exponent = 10; }
    return Math.pow(value, exponent);
}
console.log(pow(2, 2));
//named parameters
function divide(_a) {
    var dividend = _a.dividend, divisor = _a.divisor;
    return dividend / divisor;
}
//rest para
function add(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.reduce(function (d, c) { return d + c; }, 0);
}
// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
var negateFunction = function (value) { return value * -1; };
console.log(negateFunction(10));
