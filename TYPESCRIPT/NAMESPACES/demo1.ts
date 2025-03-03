namespace prasad{
    export function disp():void{
        console.log("Welcome to Disp from Prasad");
    }
    export function rocks():void{
        console.log("Wlelcome to rocks from prasad");
    }
    export class Demo{
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
}