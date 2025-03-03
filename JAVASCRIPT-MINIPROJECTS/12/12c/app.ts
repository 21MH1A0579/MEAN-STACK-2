import { Product } from './product';
import { calculateTotalPrice } from './totalPriceCalculator';
const product1 = new Product("Samsung Galaxy Note 7", 699, "Available");
const product2 = new Product("Samsung Galaxy S6 Edge", 630, "Available");
const product3 = new Product("Nokia Lumia 640XL", 224, "Out of Stock");
const quantity1 = 2; // Example quantity for product 1
const totalPrice1 = calculateTotalPrice(product1, quantity1);
console.log(`Total price for ${product1.name}: $${totalPrice1}`);

const quantity2 = 1; 
const totalPrice2 = calculateTotalPrice(product2, quantity2);
console.log(`Total price for ${product2.name}: $${totalPrice2}`);

const quantity3 = 3; 
const totalPrice3 = calculateTotalPrice(product3, quantity3);
console.log(`Total price for ${product3.name}: $${totalPrice3}`);
