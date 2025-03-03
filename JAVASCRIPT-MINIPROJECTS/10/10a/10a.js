// declaring a empty string array
var cart = [];
// arrow function logic to push values into cart array
var pushtoCart = function (item) { cart.push(item); };
// logic to add items into cart
function addtoCart() {
    var productName = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        productName[_i] = arguments[_i];
    }
    for (var _a = 0, productName_1 = productName; _a < productName_1.length; _a++) {
        var item = productName_1[_a];
        pushtoCart(item);
    }
    return cart;
}
// to populate value on console
console.log('Cart Items are:' + addtoCart(' Moto G Play, 4th Gen', ' Apple iPhone 5s'));
