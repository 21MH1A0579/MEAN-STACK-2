class cse<T>{
    pimlist:Array<T>;
    addStudents(newpimlist:Array<T>):void{
        this.pimlist=newpimlist;
        console.log("new students added");
    }
    getpinList():Array<T>{
        return this.pimlist;
    }

}
// const c=new cse<String>();
// const list=["Durga","Prasad","pavan","Rahul","Hari"];
// c.addStudents(list);
// const data:Array<String>=c.getpinList();
// console.log(data);
const c=new cse<Number>();
const list=[101,102,103,104,105];
c.addStudents(list);
const data:Array<Number>=c.getpinList();
console.log(data);
