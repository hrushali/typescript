// An enum is a special "class"that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric. Lets start with numeric.
var dir;
(function (dir) {
    dir[dir["north"] = 0] = "north";
    dir[dir["east"] = 1] = "east";
    dir[dir["south"] = 2] = "south";
    dir[dir["west"] = 3] = "west";
})(dir || (dir = {}));
var enumv = dir.north;
console.log(enumv);
//enumv =north;    is not reassign 
//numeric enums initialized
var direct;
(function (direct) {
    direct[direct["agneya"] = 1] = "agneya";
    direct[direct["vayavya"] = 2] = "vayavya";
    direct[direct["ishanya"] = 3] = "ishanya";
    direct[direct["nerutya"] = 4] = "nerutya";
})(direct || (direct = {}));
console.log(direct);
//numeric enums fully initialized
var direction;
(function (direction) {
    direction[direction["agneya"] = 1] = "agneya";
    direction[direction["vayavya"] = 2] = "vayavya";
    direction[direction["ishanya"] = 3] = "ishanya";
    direction[direction["nerutya"] = 5] = "nerutya";
})(direction || (direction = {}));
console.log(direction);
