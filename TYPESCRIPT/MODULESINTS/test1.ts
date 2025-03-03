 export var x:number=10;
 export function disp():void{
    console.log("Welcome to Modules");
 }
 export class Cse{
     a:number;
     b:number;
     constructor(a:number,b:number){
        this.a=a;
        this.b=b;
     }
     add():void{
        console.log(this.a+this.b);
     }
 }