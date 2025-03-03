// productdetail.ts
interface Product {
    name: string;
    price: number;
    available: string;
}

document.addEventListener("DOMContentLoaded", function() {
    let Product: Product | null = JSON.parse(localStorage.getItem("Product") || "{}");
    displayProduct(Product);
});

const displayProduct = (product: Product | null) => {
    if (product) {
        document.getElementById("pName")!.innerText = product.name;
        document.getElementById("pPrice")!.innerText = product.price.toString();
        document.getElementById("pAvailable")!.innerText = product.available;
    }
}

const addtoCart = () => {
    // Implement add to cart functionality
}

const backHome = () => {
    window.location.href = "HomePage.html";
}

const getMobileByColor = (color: string) => {
    // Implement logic to filter mobiles by color
}
