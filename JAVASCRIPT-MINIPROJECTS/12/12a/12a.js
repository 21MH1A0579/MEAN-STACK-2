var Product = /** @class */ (function () {
    function Product(productId, name, price, available) {
        this.productId = productId;
        this.name = name;
        this.price = price;
        this.available = available;
    }
    Product.prototype.setProductId = function (productId) {
        this.productId = productId;
    };
    Product.prototype.getProductId = function () {
        return this.productId;
    };
    return Product;
}());
var product1 = new Product(1, "Samsung Galaxy Note 7", 699, true);
console.log(product1.getProductId()); // Output: 1
product1.setProductId(2);
console.log(product1.getProductId()); // Output: 2
