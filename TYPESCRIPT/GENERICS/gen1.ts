function disp<T>(data:T):T{
    return data;
}
// console.log(disp("Prasad"))
console.log(disp(101))
function printData<X,Y>(data1:X,data2:Y):void{
    console.log("Output is"+data1+" "+data2);
}
printData("Durga","Prasad");
printData(501,"Prasad");