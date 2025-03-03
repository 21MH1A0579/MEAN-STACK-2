const express=require('express');
const fs=require('fs');
const mongoose=require('mongoose');
const app=express();
app.use(express.static('register.html'));
app.use(express.urlencoded());
app.use(express.json());
let b=mongoose.connect('mongodb+srv://chalumuribrahmendra472:acoecse@cluster0.mng2ajj.mongodb.net/authentication');
app.listen(3000,()=>{
    console.log("Server Running Successfully");
});
app.get('/registerpage',(req,res)=>{
    res.sendFile(__dirname+'/register.html');
});
let schema=new mongoose.Schema({
    _id:Number,
    email:String,
    name:String,
    password:String,
    dob:String
});
let model=new mongoose.model('userdata',schema,"Users");
app.post('/loginpage',async(req,res)=>{
    const newdata={
        _id:Math.ceil(Math.random() * 100),
        email:req.body.uemail,
        name:req.body.uname,
        password:req.body.upass,
        dob:req.body.udate,
    };
    const m=new model(newdata);
   await m.save().then((data)=>{
        res.sendFile(__dirname+'/login.html');
    })
     
})
app.post('/Homepage',(req,res)=>{
    let data=model.find({email:req.body.lemail,password:req.body.lpass}).then((data)=>{
        if(data[0])
        {
        res.send("Login Success  Mr/Mrs "+data[0].name);
        }
        else{
            res.send("Login Failed");
        }
    })
    
});