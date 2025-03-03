
interface Category {
    categoryName: string;
    }

interface Product {
        productName: string;
        productId: number;
    }

interface ProductList extends Category, Product {
        list: Array<string>;
    }

const productDetails: ProductList = {
        categoryName: 'Gadget',
        productName: 'Mobile',
        productId: 1234,
        list: ['Samsung', 'Motorola', 'LG']
    };

const listProduct = productDetails.list;

const pname: string = productDetails.productName;

console.log('Product Name is ' + pname);

// line to populate Product list
console.log('Product List is ' + listProduct);


