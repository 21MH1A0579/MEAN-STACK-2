// class demo1{
//     disp():void{
//         console.log("Durga");
//     }
// }
// class demo2 extends demo1{
//     disp():void{
//         super.disp();
//         console.log("Prasad");
//     }
// }
// const d=new demo2();
// d.disp();

class demo1{
    disp():void{
        console.log("Durga");
    }
    a:number=10;
}
class demo2 extends demo1{
    constructor(){
        super.disp;
        super.a;
    }
    rock():void{
        console.log("Prasad");
    }
}
const d1=new demo2;
console.log(d1.a);
console.log(d1.rock);