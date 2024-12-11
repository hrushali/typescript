let tuple1 : [number,boolean,string];
tuple1=[4,true,"hru"];
//provide values must have same order at the time of declaration



tuple1.push("hello in tuple")
tuple1.push(22);
console.log(tuple1);

let tuple2 :readonly [number,boolean,string];
tuple2=[4,true,"hru"];


//tuple2.push(2);// it not push the any other element in tuple
console.log(tuple2);
