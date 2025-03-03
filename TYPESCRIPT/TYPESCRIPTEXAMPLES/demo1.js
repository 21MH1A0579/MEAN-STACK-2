var a = 70;
console.log(a);
var name1 = "Durga Prasad";
var dept = "CSE";
var s1 = name1 + "works in" + dept + "department"; //pre es6
console.log(s1);
var s2 = "".concat(name1, " works in ").concat(dept, " department"); //post es6
var skills;
(function (skills) {
    skills["mnst"] = "ydp";
    skills["ml"] = "pns";
    skills["mc"] = "gsn";
    skills["cns"] = "bvr";
    skills["cd"] = "vvp";
})(skills || (skills = {}));
;
console.log(skills);
console.log(skills.ml);
console.log(skills["mc"]);
var fees;
(function (fees) {
    fees[fees["mst"] = 1000] = "mst";
    fees[fees["ml"] = 1001] = "ml";
    fees[fees["cns"] = 1002] = "cns";
    fees[fees["mc"] = 1003] = "mc";
    fees[fees["cd"] = 1004] = "cd";
})(fees || (fees = {}));
;
console.log(fees.mc);
var fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits[1]);
fruits.push('Grapes');
for (var i in fruits) {
    console.log(fruits[i]);
}
var courses = [{
        id: "mst",
        fees: 5000
    },
    {
        id: "android",
        fees: 7000
    },
    {
        id: "python",
        fees: 4000
    }];
for (var _i = 0, courses_1 = courses; _i < courses_1.length; _i++) {
    var j = courses_1[_i];
    console.log(j.id, j.fees);
}
var employee = [501, "durga"];
console.log(employee);
var student;
student = [[501, "durga"], [502, "prasad"], [503, "ydp"]];
//console.log(student[2][1]); //ydp
