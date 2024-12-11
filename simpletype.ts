// When creating a variable, there are two main ways TypeScript assigns a type:

// Explicit


let firstName : string = "Hrushali";

//implicit

let firstname = 10;

//firstName = 10;
//firstname ="hrushali"  not allow the reassign varible in another datatype value


firstName="hjjj";  //it allow reassigning when provide value of same type
firstname=20;

const json = JSON.parse("55")

console.log(typeof json);// number

console.log(firstName); //hjjj
console.log(firstname); //20