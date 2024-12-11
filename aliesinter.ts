// Type Aliases
// Type Aliases allow defining types with a custom name (an Alias).

// Type Aliases can be used for primitives like string or more complex types such as objects and arrays:


type CarYear = number;
type CarType = string;
type CarModel = string;

type car={
    year:CarYear;
    type:CarType;
    model:CarModel;

}


const carYear: CarYear = 2001;
const carType: CarType = "toyota"
const carModel:CarModel = "corolla"

const Car: car={
    year:carYear,
    type:carType,
    model:carModel

}

console.log(Car);
// Interfaces
// Interfaces are similar to type aliases, except they only apply to object types.


interface Rectangle {
    height: number,
    width: number
  }
  
  const rectangle: Rectangle = {
    height: 20,
    width: 10
  };

  console.log(rectangle);
  //extending interface


  interface Rectangle {
    height: number,
    width: number
  }
  
  interface ColoredRectangle extends Rectangle {
    color: string
  }
  
  const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
  };

  console.log(coloredRectangle);