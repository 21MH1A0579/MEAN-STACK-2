// declaring a Product class
var Product = /** @class */ (function () {
    // constructor declaration
    function Product(productId) {
        this.productId = productId;
    }
    Product.prototype.getProductId = function () {
        return 'Product id is : ' + this.productId;
    };
    return Product;
}());
// creation of Product class object
var product = new Product(1234);
// line to populate the product id details
console.log(product.getProductId());
