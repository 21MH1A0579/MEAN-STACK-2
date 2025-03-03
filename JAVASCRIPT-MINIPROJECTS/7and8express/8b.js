const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const app = express();
app.use(bodyParser.json());

app.use(helmet());

mongoose.connect('mongodb://localhost:27017/8b_database')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

const noteSchema = new mongoose.Schema({
    name: String,
    details: String
});

const Note = mongoose.model('Note', noteSchema);

app.get('/notes/:noteID', async (req, res) => {
    try {
        const note = await Note.findById(req.params.noteID);
        if (!note) {
            return res.status(404).send('Note not found');
        }
        res.json(note);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.put('/notes/:name', async (req, res) => {
    try {
        const updatedNote = await Note.findOneAndUpdate({ name: req.params.name }, req.body, { new: true });
        if (!updatedNote) {
            return res.status(404).send('Note not found');
        }
        res.json(updatedNote);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});
app.post('/notes', async (req, res) => {
    try {
        const { name, details } = req.body;
        if (!name || !details) {
            return res.status(400).send('Name and details are required');
        }
        const newNote = new Note({
            name,
            details
        });
        await newNote.save();
        res.status(201).json(newNote);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});
app.delete('/notes/:name', async (req, res) => {
    try {
        const deletedNote = await Note.findOneAndDelete({ name: req.params.name });
        if (!deletedNote) {
            return res.status(404).send('Note not found');
        }
        res.send('Note deleted successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
