var blue = document.getElementById('blue');
var green = document.getElementById('green');
var red = document.getElementById('red');
var head = document.getElementById('heading');
blue.addEventListener('click', function (e) {
    head.style.color = "blue";
});
green.addEventListener('click', function (e) {
    head.style.color = "green";
});
red.addEventListener('click', function (e) {
    head.style.color = "red";
});
