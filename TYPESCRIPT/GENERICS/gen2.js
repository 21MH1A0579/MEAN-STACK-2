function OrderDetails(arg) {
    console.log(arg.length);
    return arg;
}
var orderid = [101, 102, 103, 104, 105];
var ordername = ["FootWear", "Shirts", "Shoes", "Toys"];
var idlist = OrderDetails(orderid);
console.log(idlist);
var namelist = OrderDetails(ordername);
console.log(namelist);
