export namespace ProductUtility {
    export class Product {
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
}
