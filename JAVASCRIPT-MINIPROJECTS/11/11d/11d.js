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
// declaring a Product class with access modifiers
var Product = /** @class */ (function () {
    // declaration of constructor with 3 parameters
    function Product(productId, productName, productCategory) {
        this.productId = productId;
        this.productName = productName;
        this.productCategory = productCategory;
    }
    // method ot display product id details
    Product.prototype.getProductId = function () {
        console.log('The Product id is : ' + this.productId);
    };
    Product.productPrice = 150;
    return Product;
}());
// declaring a Gadget class extending the properties from Product class
var Gadget = /** @class */ (function (_super) {
    __extends(Gadget, _super);
    function Gadget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // method to display productCategory property
    Gadget.prototype.getProduct = function () {
        console.log('Product category is : ' + this.productCategory);
    };
    return Gadget;
}(Product));
// Gadget Class object creation
var g = new Gadget(1234, 'Mobile', 'SmartPhone');
// invoking getProduct method with the help of Gadget object
g.getProduct();
// invoking getProductId method with the help of Gadget object
g.getProductId();
// line to populate product name property with Gadget object
console.log('Product name is : ' + g.productName);
// line to populate static property product price directly with Product class name
console.log('Product price is : $' + Product.productPrice);
