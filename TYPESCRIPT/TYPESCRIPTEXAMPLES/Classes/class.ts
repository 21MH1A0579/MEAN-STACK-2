class Cse{
        name:string;
        pin:number;
    
    constructor(name:string,pin:number){
        this.name=name;
        this.pin=pin;
    }
    disp():void{
        console.log('given name is ' +this.name + ' with id ' + this.pin)
    }
    }
    const c:Cse=new Cse('durga',105);
    c.disp();
    
    //STATIC:
    class demo{
        static a:string="prasad"
        a="durga";
    }
    console.log(demo.a); //returns prasad
    let cse=new demo();
    console.log(cse.a); //durga