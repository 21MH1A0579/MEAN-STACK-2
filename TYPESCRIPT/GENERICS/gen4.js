var cse = /** @class */ (function () {
    function cse() {
    }
    cse.prototype.addStudents = function (newpimlist) {
        this.pimlist = newpimlist;
        console.log("new students added");
    };
    cse.prototype.getpinList = function () {
        return this.pimlist;
    };
    return cse;
}());
// const c=new cse<String>();
// const list=["Durga","Prasad","pavan","Rahul","Hari"];
// c.addStudents(list);
// const data:Array<String>=c.getpinList();
// console.log(data);
var c = new cse();
var list = [101, 102, 103, 104, 105];
c.addStudents(list);
var data = c.getpinList();
console.log(data);
