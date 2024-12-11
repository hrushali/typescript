// TypeScript has a specific syntax for typing arrays.
var initialarray = [];
initialarray.push("hrush");
var arr = ["Hru"];
//arr.push("rushi"); does not exist on type readonly
//also define as without datatype
var numbers = [1, 2, 3];
//numbers.push("2");  datatype of number array type is diffent
var head = numbers[0];
console.log(initialarray);
console.log(arr);
console.log(numbers);
console.log(head);
