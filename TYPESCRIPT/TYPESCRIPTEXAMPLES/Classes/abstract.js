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
var Acoe = /** @class */ (function () {
    function Acoe() {
    }
    Acoe.prototype.getWelcome = function () {
        return "Welcome to ACOE";
    };
    return Acoe;
}());
var Cse = /** @class */ (function (_super) {
    __extends(Cse, _super);
    function Cse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cse.prototype.getWelcome = function () {
        return "Welcome to cse";
    };
    Cse.prototype.getCourse = function () {
        return 'Course is CSE';
    };
    return Cse;
}(Acoe));
var Aiml = /** @class */ (function (_super) {
    __extends(Aiml, _super);
    function Aiml() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Aiml.prototype.getCourse = function () {
        return 'Course is AIML';
    };
    return Aiml;
}(Acoe));
var acoecse = new Cse();
console.log(acoecse.getWelcome());
console.log(acoecse.getCourse());
var acoeaiml = new Aiml();
console.log(acoeaiml.getWelcome());
console.log(acoeaiml.getCourse());
