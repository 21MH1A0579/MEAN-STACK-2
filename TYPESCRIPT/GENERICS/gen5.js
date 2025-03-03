var CsePair = /** @class */ (function () {
    function CsePair(first, last) {
        this.first = first;
        this.last = last;
    }
    CsePair.prototype.getFirst = function () {
        return this.first;
    };
    CsePair.prototype.getLast = function () {
        return this.last;
    };
    return CsePair;
}());
var c1 = new CsePair("Durga", "Prasad");
var c2 = new CsePair(501, "Prasad");
console.log(typeof (c1.getFirst()));
console.log(c1.getLast());
console.log(c2.getFirst());
console.log(c2.getLast());
