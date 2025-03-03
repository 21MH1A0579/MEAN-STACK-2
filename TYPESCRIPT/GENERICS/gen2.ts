function OrderDetails<T>(arg:Array<T>){
    console.log(arg.length);
    return arg;
}
const orderid:Array<Number>=[101,102,103,104,105];
const ordername:Array<String>=["FootWear","Shirts","Shoes","Toys"];
const idlist=OrderDetails(orderid);
console.log(idlist);
const namelist=OrderDetails(ordername);
console.log(namelist);