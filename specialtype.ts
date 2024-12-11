// Type: any
// any is a type that disables type checking and effectively allows all types to be used.


let u = true;
//u = "string";   not reasign in other type
//Math.round(u);  not reasign in other type

//but with any type

let v: any =true;

v = "string";
console.log(v);


console.log(Math.round(v));
//never not understand
//let w : never=true;
let y: undefined=undefined;
let z:null = null;