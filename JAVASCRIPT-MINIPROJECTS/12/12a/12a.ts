class Product {
    private productId: number;
    private name: string;
    private price: number;
    private available: boolean;

    constructor(productId: number, name: string, price: number, available: boolean) {
        this.productId = productId;
        this.name = name;
        this.price = price;
        this.available = available;
    }

    public setProductId(productId: number): void {
        this.productId = productId;
    }

    public getProductId(): number {
        return this.productId;
    }

    // Other methods can be added as needed
}

let product1 = new Product(1, "Samsung Galaxy Note 7", 699, true);
console.log(product1.getProductId()); // Output: 1
product1.setProductId(2);
console.log(product1.getProductId()); // Output: 2
