interface CSE{
     a:number;
     b:number;
}
interface ACOE extends CSE{
    c:number;
    add:()=>number;
}
class Thirdcse implements ACOE{
    a:number;
    b:number;
    c:number;
   constructor(a:number,b:number,c:number){
    this.a=a;
    this.b=b;
    this.c=c;
   }
   add():number{
     return this.a+this.b+this.c;
   };
}
var c:Thirdcse =new Thirdcse(10,20,30);
console.log("Total is"+c.add());