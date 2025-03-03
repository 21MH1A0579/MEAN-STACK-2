type student={
    firstname:number,
    lastname:string
}
function getstudent<T extends student>(data:T){
    return data;
}
const details={firstname: "prasad",lastname:123}
console.log(getstudent(details));