const express=require('express');
const fs=require('fs');
const app=express();
const pug=require('pug');
const students=JSON.parse(fs.readFileSync('./views/students.json'));
app.listen(3000,()=>{
    console.log("server running successfully!!!!");
});
app.set('view engine','pug');
app.get('/studentsdata',(req,res)=>{
    if(!students)
    {
        res.send("No data Found");
    }
    // res.render('index',{ title:"pug example",message:"welcome to Pug World." })
     res.render('index',{'std':students});
});