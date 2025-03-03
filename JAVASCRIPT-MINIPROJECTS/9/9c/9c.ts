// declaring an Array with 3 objects
const manufacturers = [{ id: 'Samsung', price: 150 },
        { id: 'Microsoft', price: 200 },
        { id: 'Apple', price: 400  },
        { id: 'Micromax', price: 100  }
    ];

let test;

// Arrow function to populate the details of Array whose price is greater than 200
function myFunction() {
  test = manufacturers.filter((manufacturer) => manufacturer.price >= 200);
}

// self-invoking an arrow function
myFunction();

console.log('Details of Manufacturer array are : ');

// logic to populate the manufacturer array details based on id value
for (const item of test) {
    console.log(item.id);
}
