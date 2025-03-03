var prasad;
(function (prasad) {
    function disp() {
        console.log("Welcome to Disp from Prasad");
    }
    prasad.disp = disp;
    function rocks() {
        console.log("Wlelcome to rocks from prasad");
    }
    prasad.rocks = rocks;
    var Demo = /** @class */ (function () {
        function Demo(a, b) {
            this.a = a;
            this.b = b;
        }
        Demo.prototype.add = function () {
            console.log(this.a + this.b);
        };
        return Demo;
    }());
    prasad.Demo = Demo;
})(prasad || (prasad = {}));
/// <reference path='./demo1.ts'> 
prasad.disp();
prasad.rocks();
var p = new prasad.Demo(10, 20);
p.add();
/// <reference path='./demo1.ts'> 
prasad.disp();
prasad.rocks();
var b = new prasad.Demo(100, 200);
b.add();
