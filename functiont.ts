// // return type
// The type of the value returned by the function can be explicitly defined.

function gettime(): number{
    return new Date().getTime();
}
console.log(gettime());

//void return type

function printHello(): void {
    console.log('Hello!');
  }

  console.log(printHello());

  //parameters

  function multiply(a: number, b: number) {
    return a * b;
  }

  console.log(multiply(10,20));

  //optional para
  function multiplyoptional(a: number, b: number,c?: number) {
  return a + b+(c||0);
}
console.log(multiplyoptional(10,20));


//default para

function pow(value: number, exponent: number = 10) {
    return value ** exponent;
  }

  console.log(pow(2,2));

  //named parameters

  function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
  }
  


  //rest para


  function add( a: number, b: number,...rest:number[]) {
    return a+b+rest.reduce((d,c) =>d+c,0);
  }

  //alias function

  type Negate = (value: number) => number;

// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;

console.log(negateFunction(10));