var radiusVar = 5;
var areaVar = Math.PI * radiusVar * radiusVar;
console.log("Area of circle using var:", areaVar);
radiusVar = 7;
areaVar = Math.PI * radiusVar * radiusVar; // Reusing the variable, no need to declare again
console.log("Area of circle after reassigning radiusVar using var:", areaVar);
// Using let for radius
let radiusLet = 5;
let areaLet = Math.PI * radiusLet * radiusLet;
console.log("Area of circle using let:", areaLet);
// Reassigning radiusLet
radiusLet = 7; // Reassignment allowed with let
areaLet = Math.PI * radiusLet * radiusLet; // Reusing the variable, no need to declare again
console.log("Area of circle after reassigning radiusLet using let:", areaLet);
// Using const for PI
const PI = 3.14159;
let radiusConst = 5;
let areaConst = PI * radiusConst * radiusConst;
console.log("Area of circle using const for PI:", areaConst);
