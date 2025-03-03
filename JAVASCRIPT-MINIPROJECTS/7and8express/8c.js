const expres=require('express');
const cookieparser=require('cookie-parser');
const app=expres();
app.listen(3000,()=>{
    console.log("server running successfully");
})
app.use(cookieparser());
app.get('/home',(req,res)=>{
    res.cookie('cse','prasad');
    res.cookie('acoe','meanstack',{
        maxAge:60000,
        httpOnly:true
    });
    res.send("cookie created");
})
app.get('/viewcookies',(req,res)=>{
    res.write("<h1>"+req.cookies.cse+"</h1>");
    res.write("<h1>"+req.cookies.acoe+"</h1>");
    res.send();
})