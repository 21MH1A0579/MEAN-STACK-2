var products = [
    {
        name: "Samsung Galaxy Note 7",
        id: 123,
        price: 699,
        available: true
    },
    {
        name: "Samsung Galaxy S6 Edge",
        id: 231,
        price: 630,
        available: true
    },
    {
        name: "Nokia Lumia 640XL",
        id: 875,
        price: 224,
        available: false
    }
];
var getMobileDetails = function (productName, productId) {
    if (productName === void 0) { productName = "Samsung Galaxy Note 7"; }
    var filteredList = [];
    if (productId) {
        filteredList = products.filter(function (product) { return product.id === productId; });
    }
    else {
        filteredList = products.filter(function (product) { return product.name === productName; });
    }
    if (filteredList.length > 0) {
        localStorage.setItem("Product", JSON.stringify(filteredList[0]));
        window.location.href = "ProductDetail.html";
    }
    else {
        alert("Product not found!");
    }
};
