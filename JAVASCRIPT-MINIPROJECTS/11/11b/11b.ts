class Product {
    constructor(public name: string, public price: number, public available: string) {}
}

// Create objects of the Product class and place them into the productlist array
const productlist: Product[] = [
    new Product("Samsung Galaxy Note 7", 699, "Available"),
    new Product("Samsung Galaxy S6 Edge", 630, "Available"),
    new Product("Nokia Lumia 640XL", 224, "Out of Stock")
];

console.log(productlist); // Just to check the product list in the console
