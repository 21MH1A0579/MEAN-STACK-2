const express=require('express');
const fs=require('fs');
var app=express();
app.use(express.static('public'));
app.use(express.urlencoded());
app.use(express.json());
app.listen(3000,()=>{
    console.log("Server Running Successfully");
});
app.get('/form',(req,res)=>{
    res.sendFile(__dirname+'/public/form.html');
});
const studentsdata=JSON.parse(fs.readFileSync("./students.json"));
app.post('/userdata',(req,res)=>{
   res.send("chaitanya");
})
