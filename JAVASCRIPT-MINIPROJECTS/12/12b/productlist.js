"use strict";
/// <reference path="productutility.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
// Importing the Product class from the ProductUtility namespace
var productutility_1 = require("./productutility");
// Using the Product class
var product1 = new productutility_1.ProductUtility.Product(1, "Samsung Galaxy Note 7", 699, true);
console.log(product1.getProductId()); // Output: 1
product1.setProductId(2);
console.log(product1.getProductId()); // Output: 2
