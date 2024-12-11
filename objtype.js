var car = {
    type: "toyoto",
    model: "corolla",
    year: 2003
};
//inference object
car.type = "honda";
//car.type=11; not reassign in other type
console.log(car);
//optional property
var car1 = {
    type: "Indica"
};
car1.maillege = 10; // later we will assign or not is optional proprety
console.log(car1);
//index signatures
var nameAgeMap = {};
nameAgeMap.Jack = 25; // no error
//nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
console.log(nameAgeMap);
