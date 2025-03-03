// class Cse2{
//     private pin:number;
//     constructor(pin:number){
//         this.pin=pin;
//     }
// }
// var cse2:Cse2=new Cse2(100);
// console.log(cse2.pin);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cse3 = /** @class */ (function () {
    function Cse3(pin) {
        this.pin = pin;
    }
    return Cse3;
}());
var Cse4 = /** @class */ (function (_super) {
    __extends(Cse4, _super);
    function Cse4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cse4.prototype.getPin = function () {
        console.log(this.pin);
    };
    return Cse4;
}(Cse3));
var cse4 = new Cse4(100);
cse4.getPin();
