// productlist.ts
interface Product {
    name: string;
    id: number;
    price: number;
    available: boolean;
}

const products: Product[] = [
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

const getMobileDetails = (productName: string = "Samsung Galaxy Note 7", productId?: number) => {
    let filteredList: Product[] = [];
    if(productId) {
        filteredList = products.filter(product => product.id === productId);
    } else {
        filteredList = products.filter(product => product.name === productName);
    }
    
    if (filteredList.length > 0) {
        localStorage.setItem("Product", JSON.stringify(filteredList[0]));
        window.location.href = "ProductDetail.html";
    } else {
        alert("Product not found!");
    }
}
