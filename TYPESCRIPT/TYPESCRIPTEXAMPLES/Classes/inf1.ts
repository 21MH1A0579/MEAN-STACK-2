interface CSEMNST{
         id:number;
        readonly name:string;
         depart?:string;
         disp:()=>void;
}
var dp:CSEMNST={
    id:501,
    name:"prasad",
    // depart:"CSE",
    disp() {
        console.log("Welcome to MeanStack");
    }
}
dp.name="Durga";
console.log(dp.id+" "+dp.name+" "+dp.depart);
dp.disp();