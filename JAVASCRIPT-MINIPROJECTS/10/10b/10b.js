// logic to display the Product details with interface object as parameter
function getProductDetails(productobj) {
    return 'The product name is : ' + productobj.productName;
}
// declaring a variable having interface properties
var prodObject = { productId: 1001, productName: 'Mobile' };
// declaring variable and invoking Product details function
var productDetails = getProductDetails(prodObject);
// line to populate the created product on console
console.log(productDetails);
