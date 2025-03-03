// logic to display the Product details with interface object as parameter
// tslint:disable-next-line:adjacent-overload-signatures
function getProductDetails(productobj) {
    return 'The product name is : ' + productobj.productName;
}
// declaring a variable along with interface properties
var prodObject = { productId: 1001, productName: 'Mobile', productCategory: 'Gadget' };
// declaring variable and invoking Product details function
var productDetails = getProductDetails(prodObject);
// line to populate the created product variable on console
console.log(productDetails);
