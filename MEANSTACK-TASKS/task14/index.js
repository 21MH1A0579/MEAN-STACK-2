const express=require('express');
const fs=require('fs');
const data=JSON.parse(fs.readFileSync("./db.json"));
const app=express();
app.use(express.static('register.html'));
app.use(express.urlencoded());
app.use(express.json());
const authenicate=(req,res,next)=>{
    let authenicateddata=data.find(el=>{ return ((el.password===req.body.lpass) && (el.email===req.body.lemail))});
    if(authenicateddata)
    {
        next();
    }
    else
    {
        res.send("LOGIN FAILED PLEASE REGISTER FIRST!!!");
    }
}
app.listen(3000,()=>{
    console.log("Server Running Successfully");
});
app.get('/registerpage',(req,res)=>{
    res.sendFile(__dirname+'/register.html');
});
app.post('/loginpage',(req,res)=>{
    const newdata={
        email:req.body.uemail,
        name:req.body.uname,
        password:req.body.upass,
        dob:req.body.udate,
    };
    data.push(newdata);
    fs.writeFile('./db.json',JSON.stringify(data),(err)=>{

    });
   res.sendFile(__dirname+'/login.html');
})
//add middleware
app.use(authenicate);
app.post('/Homepage',(req,res)=>{
    res.sendFile(__dirname+'/homepage.html');
});