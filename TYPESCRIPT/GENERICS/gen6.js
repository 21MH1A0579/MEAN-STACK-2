var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function Cse(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
// let person=Cse(
//     {
//        name:"prasad",
//     },
//     {
//         city:"Rjy",
//     }
// )
var person = Cse({
    name: "prasad"
}, {
    city: "Rjy"
});
console.log(person);
