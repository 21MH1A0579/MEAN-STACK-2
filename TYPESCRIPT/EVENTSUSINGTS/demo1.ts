const blue=document.getElementById('blue') as HTMLDivElement;
const green=document.getElementById('green') as HTMLDivElement;
const red=document.getElementById('red') as HTMLDivElement;
const head=document.getElementById('heading') as HTMLHeadingElement;
blue.addEventListener('click',(e)=>{
head.style.color="blue";
})
green.addEventListener('click',(e)=>{
    head.style.color="green";
    })
red.addEventListener('click',(e)=>{
    head.style.color="red";
    })