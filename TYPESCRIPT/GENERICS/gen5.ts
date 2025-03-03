class CsePair<F,L>{
    constructor(public first:F,public last:L){
         
    }
    getFirst():F{
        return this.first;
    }
    getLast():L{
        return this.last;
    }
}
const c1=new CsePair<String,String>("Durga","Prasad");
const c2=new CsePair<Number,String>(501,"Prasad");
console.log(c1.getFirst());
console.log(c1.getLast());
console.log(c2.getFirst());
console.log(c2.getLast());

