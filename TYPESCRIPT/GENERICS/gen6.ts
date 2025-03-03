function Cse<T extends object,V extends object >(obj1:T,obj2:V){
    return {...obj1,...obj2};
}
// let person=Cse(
//     {
//        name:"prasad",
//     },
//     {
//         city:"Rjy",
//     }
// )
let person=Cse(
    {
    name:"prasad"
    },
   {
      city:"Rjy"
   }
)
console.log(person);