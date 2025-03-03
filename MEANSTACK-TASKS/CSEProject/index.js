const express=require('express');
const mongoose=require('mongoose');
const session=require('express-session');
const bcrypt=require('bcrypt');
const app=express();
app.use(session({
    secret:"meanstack",
    saveUninitialized:false
}))
app.use(express.static('/public'));
app.use(express.json());
app.use(express.urlencoded());
app.use((req,res,next)=>{
    res.set("Cache-Control",'no-store');
    next();
})
app.listen(3000,()=>{
    console.log("Server Running Successfully");
})
let b=mongoose.connect('mongodb://127.0.0.1:27017/cseproject');
b.then((info)=>{
    console.log("Connection Success")

})
b.catch((info)=>{
    console.log("Connection Failed");
})
let cseschema=new mongoose.Schema({
    _id:Number,
    name:{
        type:String,
        "minLength":8,
        required:[true,"Please Enter Name"]
    },
    password:{
        type:String,
        "minLength":8,
        required:[true,"please enter password"]
    },
    email:String,
    gender:String,
    skills:String,
    college:String,
},
{versionKey:false}
)
let csemodel=new mongoose.model("csedata",cseschema,"profile");
app.get('/home',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html');
})
app.post('/register',async (req,res)=>{
    let _id=req.body.pin;
    let name=req.body.name;
    let password=req.body.password;
    let email=req.body.email;
    let gender=req.body.gender;
    let a=[];
    x=req.body.android;
    if(x)
    {
        a.push(x);
    }
    y=req.body.meanstack;
    if(y)
    {
        a.push(y);
    }
    z=req.body.python;
    if(z)
    {
        a.push(z);
    }
    j=req.body.devops;
    if(j)
    {
        a.push(j);
    }
    k=req.body.java;
    if(k)
    {
        a.push(k);
    }
    let skills=a.toString();
    let college=req.body.college;
    let hashedpassword=await bcrypt.hash(password,10);
    var data={
        _id:_id,
        name:name,
        password:hashedpassword,
        email:email,
        gender:gender,
        skills:skills,
        college:college
    }
    const m= new csemodel(data);
    await m.save().then((info)=>{
       res.sendFile(__dirname+'/public/login.html');
    }).catch((err)=>{
        res.send(err.message);
    })


})
app.get('/register',(req,res)=>{
    res.sendFile(__dirname+'/public/login.html');
})
app.post('/login',async(req,res)=>{
    const {name,password}=req.body;
    const userone=await csemodel.findOne({name:name});
    if(!userone)
    {
       return  res.status(400).send("USER NOT FOUND");
    }
   const passwordmatch=await bcrypt.compare(password,userone.password);
   if(passwordmatch)
   {
        req.session.loggedin=true;
        res.redirect('/view?name='+name);
   }
   else{
    res.send("INVALID PASSWORD");
   }
})
app.get('/view',async(req,res)=>{
    let user=req.query.name;
    const userone=await csemodel.findOne({name:user});
    console.log(userone);
    if(req.session.loggedin)
    {
       res.sendFile(__dirname+'/public/view.html');
    }
    else{
       res.sendFile(__dirname+'/public/login.html');
    }
})
app.get('/logout',(req,res)=>{
    req.session.destroy((err)=>{
        if(err)
        {
            console.log(err)
        }
        else{
            res.send("logged Out")
        }
    })
})