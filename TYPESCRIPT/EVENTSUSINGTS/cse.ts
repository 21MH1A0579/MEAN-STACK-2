const xyz=document.getElementById('route') as HTMLDivElement;
function rocks(){
    xyz.style.backgroundColor="blue";
}
xyz.addEventListener('click',(e)=>{
    e.preventDefault();
    rocks();
})