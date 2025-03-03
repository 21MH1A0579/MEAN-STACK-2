// class demo1{
//     disp():void{
//         console.log("Durga");
//     }
// }
// class demo2 extends demo1{
//     disp():void{
//         super.disp();
//         console.log("Prasad");
//     }
// }
// const d=new demo2();
// d.disp();
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
var demo1 = /** @class */ (function () {
    function demo1() {
        this.a = 10;
    }
    demo1.prototype.disp = function () {
        console.log("Durga");
    };
    return demo1;
}());
var demo2 = /** @class */ (function (_super) {
    __extends(demo2, _super);
    function demo2() {
        var _this = this;
        _super.prototype.disp;
        _super.prototype.a;
        return _this;
    }
    demo2.prototype.rock = function () {
        console.log("Prasad");
    };
    return demo2;
}(demo1));
var d1 = new demo2;
console.log(d1.a);
console.log(d1.rock);
