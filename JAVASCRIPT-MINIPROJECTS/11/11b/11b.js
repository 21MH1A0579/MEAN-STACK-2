var Product = /** @class */ (function () {
    function Product(name, price, available) {
        this.name = name;
        this.price = price;
        this.available = available;
    }
    return Product;
}());
// Create objects of the Product class and place them into the productlist array
var productlist = [
    new Product("Samsung Galaxy Note 7", 699, "Available"),
    new Product("Samsung Galaxy S6 Edge", 630, "Available"),
    new Product("Nokia Lumia 640XL", 224, "Out of Stock")
];
console.log(productlist); // Just to check the product list in the console
