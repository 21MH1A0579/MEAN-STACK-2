"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cse = exports.disp = exports.x = void 0;
exports.x = 10;
function disp() {
    console.log("Welcome to Modules");
}
exports.disp = disp;
var Cse = /** @class */ (function () {
    function Cse(a, b) {
        this.a = a;
        this.b = b;
    }
    Cse.prototype.add = function () {
        console.log(this.a + this.b);
    };
    return Cse;
}());
exports.Cse = Cse;
