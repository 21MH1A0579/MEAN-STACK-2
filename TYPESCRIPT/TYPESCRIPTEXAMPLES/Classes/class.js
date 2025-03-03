var Cse = /** @class */ (function () {
    function Cse(name, pin) {
        this.name = name;
        this.pin = pin;
    }
    Cse.prototype.disp = function () {
        console.log('given name is ' + this.name + ' with id ' + this.pin);
    };
    return Cse;
}());
var c = new Cse('durga', 105);
c.disp();
//STATIC:
var demo = /** @class */ (function () {
    function demo() {
        this.a = "durga";
    }
    demo.a = "prasad";
    return demo;
}());
console.log(demo.a); //returns prasad
var cse = new demo();
console.log(cse.a); //durga
