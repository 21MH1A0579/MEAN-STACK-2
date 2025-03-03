var xyz = document.getElementById('route');
function rocks() {
    xyz.style.backgroundColor = "blue";
}
xyz.addEventListener('click', function (e) {
    e.preventDefault();
    rocks();
});
