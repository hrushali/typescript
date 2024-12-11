// When creating a variable, there are two main ways TypeScript assigns a type:
// Explicit
var firstName = "Hrushali";
//implicit
var firstname = 10;
//firstName = 10;
//firstname ="hrushali"  not allow the reassign varible in another datatype value
firstName = "hjjj"; //it allow reassigning when provide value of same type
firstname = 20;
var json = JSON.parse("55");
console.log(typeof json);
console.log(firstName);
console.log(firstname);
