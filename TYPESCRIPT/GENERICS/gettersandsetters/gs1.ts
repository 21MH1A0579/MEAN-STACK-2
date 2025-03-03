class Demo{
    private _name;
   get name():string{
         return this._name;
    }
    set name(val:string){
        this._name=val;
    }
}
var d=new Demo();
d.name="prasad";
console.log(d.name)