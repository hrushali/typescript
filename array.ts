// TypeScript has a specific syntax for typing arrays.


const initialarray: string[] = [];

initialarray.push("hrush");

const arr: readonly string[] =["Hru"];
//arr.push("rushi"); does not exist on type readonly

//also define as without datatype

const numbers = [1,2,3];

//numbers.push("2");  datatype of number array type is diffent

let head = numbers[0]

console.log(initialarray);

console.log(arr);

console.log(numbers);

console.log(head);