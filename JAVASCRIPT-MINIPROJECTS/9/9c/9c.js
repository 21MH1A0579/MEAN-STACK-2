// declaring an Array with 3 objects
var manufacturers = [{ id: 'Samsung', price: 150 },
    { id: 'Microsoft', price: 200 },
    { id: 'Apple', price: 400 },
    { id: 'Micromax', price: 100 }
];
var test;
// Arrow function to populate the details of Array whose price is greater than 200
function myFunction() {
    test = manufacturers.filter(function (manufacturer) { return manufacturer.price >= 200; });
}
// self-invoking an arrow function
myFunction();
console.log('Details of Manufacturer array are : ');
// logic to populate the manufacturer array details based on id value
for (var _i = 0, test_1 = test; _i < test_1.length; _i++) {
    var item = test_1[_i];
    console.log(item.id);
}
