function sum1(x, y) {
    return x + y;
}
var s = sum1(10, 20);
console.log(s);
function greet(fname, lname) {
    return fname + " " + lname;
}
console.log(greet('Durga', 'Prasad'));
function opt1(name, subject) {
    return name + " " + subject;
}
console.log(opt1('Prasad', 'MNST'));
console.log(opt1('Durga'));
function opt2(name, subject) {
    if (typeof (subject) != "undefined")
        return name + " " + subject;
    else
        return name;
}
console.log(opt2('Prasad', 'MNST'));
console.log(opt2('Prasad'));
function default1(name, subject) {
    if (name === void 0) { name = 'Prasad'; }
    return name + " " + subject;
}
console.log(default1('Durga', 'MNST'));
console.log(default1(undefined, 'DEVOPS'));
console.log(default1('Durga', 'MNST'));
console.log(default1(undefined, 'DEVOPS'));
function cserest(name) {
    var subject = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        subject[_i - 1] = arguments[_i];
    }
    return name + " teaches " + subject.join(",");
}
console.log(cserest('Prasad', "MNST", "DEVOPS", "JAVA"));
