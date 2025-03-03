var form = document.querySelector("form");
// console.log(form.childNodes)
var a = document.getElementById('tf1');
var b = document.getElementById('tf2');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(a.value + b.value);
    document.write("Details:" + a.value + " " + b.value);
});
