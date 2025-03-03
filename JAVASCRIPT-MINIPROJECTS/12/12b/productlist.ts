/// <reference path="productutility.ts" />

// Importing the Product class from the ProductUtility namespace
import { ProductUtility } from './productutility';

// Using the Product class
let product1 = new ProductUtility.Product(1, "Samsung Galaxy Note 7", 699, true);
console.log(product1.getProductId()); // Output: 1
product1.setProductId(2);
console.log(product1.getProductId()); // Output: 2
