// class Cse2{
//     private pin:number;
//     constructor(pin:number){
//         this.pin=pin;
//     }
// }
// var cse2:Cse2=new Cse2(100);
// console.log(cse2.pin);

class Cse3{
    protected pin:number;
    constructor(pin:number){
        this.pin=pin;
    }
}
class Cse4 extends Cse3{
    getPin():void{
        console.log(this.pin);
    }
}
var cse4:Cse4=new Cse4(100);
cse4.getPin();