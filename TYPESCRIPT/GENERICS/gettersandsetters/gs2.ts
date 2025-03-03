class Student{
    private _pin:number;
    private _firstname:string;
    private _lastname:string;
    public get pin():number{
        return this._pin;
    }
    public set pin(arg:number){
        if(arg<=501 || arg>=560)
            {
                throw new Error("Pin is Invalid");
                
            }
        this._pin=arg;       
    }
    public get fullname():string{
           return `${this._firstname} ${this._lastname}`;
    }
    public set fullname(name:string){
        let parts=name.split(' ');
        if(parts.length!=2)
            {
                throw new Error("Enter Valid Name");
            }
        this._firstname=parts[0];
        this._lastname=parts[1];
    }
}
let s=new Student();
s.pin=515;
s.fullname="Durga Prasad Cse";
console.log(s.pin);
console.log(s.fullname);