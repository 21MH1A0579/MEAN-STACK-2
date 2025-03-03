var ThirdCse = /** @class */ (function () {
    function ThirdCse(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    ThirdCse.prototype.add = function () {
        return this.a + this.b + this.c;
    };
    ;
    return ThirdCse;
}());
var c = new ThirdCse(10, 20, 30);
console.log("Total is" + c.add());
