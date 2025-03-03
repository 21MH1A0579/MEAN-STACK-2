abstract class Acoe{
    getWelcome():string{
        return  "Welcome to ACOE";
    }
    abstract getCourse():string;
}
class Cse extends Acoe{
    getWelcome():string{
        return "Welcome to cse";
    }
    getCourse():string{
        return 'Course is CSE';
    }
}
class Aiml extends Acoe{
    getCourse():string{
        return 'Course is AIML';
    }
}
var acoecse:Cse=new Cse();
console.log(acoecse.getWelcome());
console.log(acoecse.getCourse());
var acoeaiml:Aiml=new Aiml();
console.log(acoeaiml.getWelcome());
console.log(acoeaiml.getCourse());