function sum1(x:number,y:number):number{
    return x+y;
}
var s=sum1(10,20);
console.log(s);
function greet(fname:string,lname:string):string{
    return fname+" "+lname;
}
console.log(greet('Durga','Prasad'));
function opt1(name:string,subject?:string):string{
    return name+" "+subject;
}
console.log(opt1('Prasad','MNST'));
console.log(opt1('Durga'));
function opt2(name:string,subject?:string):string{
    if(typeof(subject)!="undefined")
        return name+" "+subject;
    else
        return name;
}
console.log(opt2('Prasad','MNST'));
console.log(opt2('Prasad'));
function default1(name:string='Prasad',subject:string):string{
    return  name+" "+subject;
}
console.log(default1('Durga','MNST'));
console.log(default1(undefined,'DEVOPS'));
console.log(default1('Durga', 'MNST'));
console.log(default1(undefined, 'DEVOPS'));
function cserest(name:string,...subject:string[]):string{
    return  name+" teaches "+subject.join(",");
}
console.log(cserest('Prasad',"MNST","DEVOPS","JAVA"));