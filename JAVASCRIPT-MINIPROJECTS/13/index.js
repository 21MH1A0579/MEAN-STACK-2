"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.listen(3000, () => {
    console.log("Server running successfully!!!");
});
mongoose_1.default.connect('mongodb://localhost:27017/13quesdb')
    .then(() => {
    console.log("Connection Success");
})
    .catch(() => {
    console.log("Connection Failed");
});
const cseSchema = new mongoose_1.default.Schema({
    _id: Number,
    name: String,
    depart: String,
    email: String,
    percentage: Number
});
const CseModel = mongoose_1.default.model('csedata', cseSchema, 'percentagedata');
app.post('/post', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const newData = new CseModel(data);
    yield newData.save().then(() => {
        res.send("Data Inserted Successfully");
    });
}));
app.get('/viewdata', (req, res) => {
    CseModel.find().then((data) => {
        res.json(data);
    });
});
app.get('/viewdata/byid/:id', (req, res) => {
    const id = parseInt(req.params.id);
    CseModel.find({ _id: id }).then((data) => {
        res.json(data);
    });
});
app.patch('/updatedata/byid/:id', (req, res) => {
    CseModel.findByIdAndUpdate(req.params.id, { $set: req.body }).then(() => {
        res.send("Updated Successfully");
    });
});
app.delete('/deletedata/byid/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    CseModel.findByIdAndDelete(id).then(() => {
        res.send("Deleted Successfully");
    });
}));
