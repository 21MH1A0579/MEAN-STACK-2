"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_1 = require("./product");
var totalPriceCalculator_1 = require("./totalPriceCalculator");
var product1 = new product_1.Product("Samsung Galaxy Note 7", 699, "Available");
var product2 = new product_1.Product("Samsung Galaxy S6 Edge", 630, "Available");
var product3 = new product_1.Product("Nokia Lumia 640XL", 224, "Out of Stock");
var quantity1 = 2; // Example quantity for product 1
var totalPrice1 = (0, totalPriceCalculator_1.calculateTotalPrice)(product1, quantity1);
console.log("Total price for ".concat(product1.name, ": $").concat(totalPrice1));
var quantity2 = 1;
var totalPrice2 = (0, totalPriceCalculator_1.calculateTotalPrice)(product2, quantity2);
console.log("Total price for ".concat(product2.name, ": $").concat(totalPrice2));
var quantity3 = 3;
var totalPrice3 = (0, totalPriceCalculator_1.calculateTotalPrice)(product3, quantity3);
console.log("Total price for ".concat(product3.name, ": $").concat(totalPrice3));
