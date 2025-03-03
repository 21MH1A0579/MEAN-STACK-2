import express,{Express,Request,Response, urlencoded} from "express";
import mongoose from "mongoose";
const app=express();
app.use(express.json());
app.listen(3000,()=>{
    console.log("server running successfully!!!");
})
let b=mongoose.connect('mongodb://localhost:27017/testdb');
b.then((info)=>{
    console.log("connection Success");
})
b.catch(()=>{
    console.log("connection Failed");
})
let cseschema=new mongoose.Schema({
    _id:Number,
    name:String,
    depart:String,
    email:String,
    percentage:Number
})
let model=mongoose.model('csedata',cseschema,'percentagedata');
app.post('/post',async (req:Request,res:Response)=>{
    var data={
        _id:req.body._id,
        name:req.body.name,
        depart:req.body.depart,
        email:req.body.email,
        percentage:req.body.percentage
    }
    const m=new model(data);
    await m.save().then((data)=>{
        res.send("data Inserted Successfully");
    })
})
app.get('/viewdata',(req:Request,res:Response)=>{
    model.find().then((data)=>{
        res.json(data);
    })
})
app.get('/viewdata/byid/:id', (req: Request, res: Response) => {
    let id: Number = parseInt(req.params.id); 
    model.find({_id:id }).then((data) => {
        res.json(data);
    });
   
});
app.patch('/updatedata/byid/:id',(req:Request,res:Response)=>{
    model.findByIdAndUpdate(req.params.id,{$set:req.body}).then((info)=>{
        res.send("Updated Successfully");
    })

})
app.delete('/deletedata/byid/:id',async (req:Request,res:Response)=>{
    model.findByIdAndDelete(req.params.id).then((info)=>{
        res.send("Deleted Successfully");
    })
})