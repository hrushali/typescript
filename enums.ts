// An enum is a special "class"that represents a group of constants (unchangeable variables).

// Enums come in two flavors string and numeric. Lets start with numeric.

enum dir{
    north,
    east,
    south,
    west
}


let enumv = dir.north;
console.log(enumv);

//enumv =north;    is not reassign 

//numeric enums initialized
enum direct {
    agneya=1,
    vayavya,
    ishanya ,
    nerutya


}
console.log(direct);


//numeric enums fully initialized

enum direction {
    agneya=1,
    vayavya=2,
    ishanya =3,
    nerutya=5


}

console.log(direction);


//string enum

enum directi {
    agnya='north',
    vayaya='east',
    ishana ='south',
    neruty='west'


}
console.log(directi)