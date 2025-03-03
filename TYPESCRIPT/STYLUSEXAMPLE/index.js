const express=require('express');
const stylus=require('stylus');
const app=express()
app.use(express.static('./public'))
app.use(stylus.middleware('./public'))
app.listen(3000,()=>{
    console.log("Server Running Successfully")
})
app.get('/home',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})