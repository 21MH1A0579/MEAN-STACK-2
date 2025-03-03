// const express=require('express');
// const app=express();
// app.listen(3030,()=>{
//     console.log("server running successfully at 3030");
// });
// app.get('/quiz',(req,res)=>{
//     res.sendFile(__dirname+'/public/quiz.html');
// });
// app.post('/result',(req,res)=>{
//     res.send(req.body.q1);
// })
const express = require('express');
const bodyParser = require('body-parser'); // Import body-parser

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());
// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3030, () => {
    console.log("server running successfully at 3030");
});

app.get('/quiz', (req, res) => {
    res.sendFile(__dirname + '/public/quiz.html');
});

app.post('/result', (req, res) => {
   var cnt=0;
   if(req.body.q1==='c')
   {
    cnt++;
   }
   if(req.body.q2==='c')
   {
    cnt++;
   }
   if(req.body.q3==='c')
   {
    cnt++;
   }
   if(req.body.q4==='d')
   {
    cnt++;
   }
   res.send(`you got ${cnt} out of 4`);
});
