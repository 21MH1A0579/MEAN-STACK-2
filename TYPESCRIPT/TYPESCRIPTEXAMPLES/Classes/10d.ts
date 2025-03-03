function names(fname:string,lname:string){
    return fname+" "+lname;
}
interface Cse123{
       (fname:string,lname:string):string
}
let inf:Cse123;
inf=names;
const details:string=inf("Durga","Prasad");
console.log(details);