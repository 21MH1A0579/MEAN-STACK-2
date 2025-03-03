var Demo = /** @class */ (function () {
    function Demo() {
    }
    Object.defineProperty(Demo.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (val) {
            this._name = val;
        },
        enumerable: false,
        configurable: true
    });
    return Demo;
}());
var d = new Demo();
d.name = "prasad";
console.log(d.name);
