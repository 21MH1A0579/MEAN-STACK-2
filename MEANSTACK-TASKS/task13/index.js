const express=require('express');
const app=express();
app.use(express.static('views'));
app.use(express.urlencoded());
app.use(express.json());
const pug=require('pug');
app.set('view engine','pug');
app.listen(3000,()=>{
    console.log("Server Running Successfully at port:3000");
})
const fs=require('fs');
const data=JSON.parse(fs.readFileSync('./views/db.json'));
app.get('/form',(req,res)=>{
   res.sendFile(__dirname+'/views/form.html');
});
app.post("/display",(req,res)=>{
   const sub=[];
     if(req.body.mnst==="on")
     {
         sub.push("mnst");
     }
     if(req.body.cns==="on")
     {
         sub.push("cns");
     }
     if(req.body.cd==="on")
     {
         sub.push("cd");
     }
     if(req.body.ml==="on")
     {
         sub.push("ml");
     }
     const newdata={
        "rollnumber":req.body.uroll,
        "name":req.body.uname,
        "number":req.body.uphone,
        "sub":sub
     };
     data.push(newdata);
     fs.writeFile('./views/db.json',JSON.stringify(data),(err)=>{
       res.render('table.pug',{'data':data});
        
     })

})