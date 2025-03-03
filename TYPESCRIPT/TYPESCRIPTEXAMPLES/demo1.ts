var  a:number=70;
console.log(a);
var name1:string="Durga Prasad";
var  dept:string="CSE";
var s1:string=name1+"works in"+dept+"department";//pre es6
console.log(s1);
var s2:string=`${name1} works in ${dept} department`;//post es6
enum skills{
    mnst="ydp",
    ml="pns",
    mc="gsn",
    cns="bvr",
    cd="vvp"
};
console.log(skills);
console.log(skills.ml);
console.log(skills["mc"]);
enum fees{
    mst=1000,
    ml,
    cns,
    mc,
    cd
};
console.log(fees.mc);
var fruits:string[]=['Apple','Banana','Orange'];
console.log(fruits[1]);
fruits.push('Grapes');
for(var i in fruits){
    console.log(fruits[i]);
}
var courses:any[]=[{
    id:"mst",
    fees:5000
},
{
    id:"android",
    fees:7000
},
{
    id:"python",
    fees:4000
}];
for(var j of courses){
    console.log(j.id,j.fees);
}
var employee:[number,string]=[501,"durga"];
console.log(employee);
var student:[number,string][];
student=[[501,"durga"],[502,"prasad"],[503,"ydp"]];
//console.log(student[2][1]); //ydp