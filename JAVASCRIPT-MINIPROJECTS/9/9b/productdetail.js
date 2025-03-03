document.addEventListener("DOMContentLoaded", function () {
    var Product = JSON.parse(localStorage.getItem("Product") || "{}");
    displayProduct(Product);
});
var displayProduct = function (product) {
    if (product) {
        document.getElementById("pName").innerText = product.name;
        document.getElementById("pPrice").innerText = product.price.toString();
        document.getElementById("pAvailable").innerText = product.available;
    }
};
var addtoCart = function () {
    // Implement add to cart functionality
};
var backHome = function () {
    window.location.href = "HomePage.html";
};
var getMobileByColor = function (color) {
    // Implement logic to filter mobiles by color
};
