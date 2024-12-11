// Type: any /unknown
// any is a type that disables type checking and effectively allows all types to be used.
var u = true;
//u = "string";   not reasign in other type
//Math.round(u);  not reasign in other type
//but with any type
var v = true;
v = "string";
console.log(v);
console.log(Math.round(v));
//never not understand

//let x: never=true;

