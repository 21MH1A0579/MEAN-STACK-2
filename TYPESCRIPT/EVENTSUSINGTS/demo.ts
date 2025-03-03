const form=document.querySelector("form") as HTMLFormElement;
// console.log(form.childNodes)
const a=document.getElementById('tf1') as HTMLInputElement;
const b=document.getElementById('tf2') as HTMLInputElement;
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(a.value+b.value);
    document.write("Details:"+a.value+" "+b.value);
})