import express, { Request, Response } from 'express';
import mongoose, { Document } from 'mongoose';

const app = express();
app.use(express.json());
app.listen(3000, () => {
    console.log("Server running successfully!!!");
});

mongoose.connect('mongodb://localhost:27017/13quesdb')
    .then(() => {
        console.log("Connection Success");
    })
    .catch(() => {
        console.log("Connection Failed");
    });

interface ICseData extends Document {
    _id: number;
    name: string;
    depart: string;
    email: string;
    percentage: number;
}

const cseSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    depart: String,
    email: String,
    percentage: Number
});

const CseModel = mongoose.model<ICseData>('csedata', cseSchema, 'percentagedata');

app.post('/post', async (req: Request, res: Response) => {
    const data: ICseData = req.body as ICseData; 
    const newData = new CseModel(data);
    await newData.save().then(() => {
        res.send("Data Inserted Successfully");
    });
});

app.get('/viewdata', (req: Request, res: Response) => {
    CseModel.find().then((data) => {
        res.json(data);
    });
});

app.get('/viewdata/byid/:id', (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    CseModel.find({ _id: id }).then((data) => {
        res.json(data);
    });
});

app.patch('/updatedata/byid/:id', (req: Request, res: Response) => {
    CseModel.findByIdAndUpdate(req.params.id, { $set: req.body }).then(() => {
        res.send("Updated Successfully");
    });
});

app.delete('/deletedata/byid/:id', async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    CseModel.findByIdAndDelete(id).then(() => {
        res.send("Deleted Successfully");
    });
});
