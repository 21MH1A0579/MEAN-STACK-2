const express=require('express');
const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const pug=require('pug');
const fileUpload = require('express-fileupload');
const fs=require('fs');
const session=require('express-session');
const app=express();
app.listen(3000,()=>{
    console.log("Server Running Successfully!!!");
})
app.set('view engine','pug');
app.use(session({
    secret:"chaitanya",
    saveUninitialized:false,
    resave:false
}))
app.use(fileUpload())
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('public'))
app.use((req,res,next)=>{
    res.set("Cache-Control",'no-store');
    next();
})
var b=mongoose.connect("mongodb://localhost:27017/authenticationproject");
let schema=new mongoose.Schema({
    name:String,
    pin:String,
    email:String,
    password:String,
    phone:Number,
    dob:String,
    gender:String,
    college:String,
    branch:String,
    courses:Array,
    address:String
})
let model=new mongoose.model('userdata',schema,'userdata');
app.get('/',(req,res)=>{
    res.send("Welcome to APP")
})
app.get('/register',(req,res)=>{
    res.sendFile(__dirname+'/public/register.html')
})
app.get('/login', (req, res) => {
    res.sendFile(__dirname+'/public/login.html');
});

app.post('/login',async (req,res)=>{
    let pic=req.files.photo;
    let uplodpath=__dirname+'/public/images/'+pic.name;
     await pic.mv(uplodpath,err=>{
        if(err)
        {
             res.send(err);
        }
        else{
            fs.rename(uplodpath,__dirname+'/public/images/'+req.body.pin+'.jpg',(error)=>{
                console.log(error);
            });
        }
    })
    let hashedpasswrd=await bcrypt.hash(req.body.pass,10);
    let courses=[];
    if(req.body.java)
    {
        courses.push(req.body.java);
    }
    if(req.body.python)
    {
        courses.push(req.body.python);
    }
    if(req.body.cpp)
    {
        courses.push(req.body.cpp);
    }
    if(req.body.JavaScript)
    {
        courses.push(req.body.JavaScript);
    }
    if(req.body.Dart)
    {
        courses.push(req.body.Dart);
    }
    var newdata={
        "name":req.body.name,
        "pin":req.body.pin,
        "email":req.body.email,
        "password":hashedpasswrd,
        "phone":req.body.phone,
        "dob":req.body.dob,
        "gender":req.body.gender,
        "college":req.body.college,
        "branch":req.body.branch,
        "courses":courses,
        "address":req.body.address,
    };
    const m=new model(newdata);
    await m.save().then((info)=>{
         res.sendFile(__dirname+'/public/login.html');
     })

})
app.post('/profile',(req,res)=>{
     var user=req.body.lpin;
     var passwd=req.body.lpass;
     let data=model.findOne({pin:user});
     data.then(async (info)=>{
        if(info)
        {
            let verifypass=await bcrypt.compare(passwd,info['password']);
            if(verifypass)
            {
                req.session.loggedin=true;
                if(req.session.loggedin){
                    res.render('profile.pug',{info})
                  }
                  else{
                      res.send("Unauthorised!!! Please Login To view this page")
                  }
               
            }
            else
            {
                res.send("INVALID PASSWORD!!!");
            }
        }
        else{
            res.send("NO DATA FOUND WITH PIN:"+user);
        }
     })
})

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error logging out");
        } else {
            res.redirect('/login'); // Redirect to the login page after logout
        }
    });
});
