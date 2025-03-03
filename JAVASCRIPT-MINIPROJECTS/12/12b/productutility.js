"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUtility = void 0;
var ProductUtility;
(function (ProductUtility) {
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
    ProductUtility.Product = Product;
})(ProductUtility || (exports.ProductUtility = ProductUtility = {}));
