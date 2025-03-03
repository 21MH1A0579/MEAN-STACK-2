const mongoose = require('mongoose');
// Define your schema
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true,
        min: 18
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create a model from the schema
const User = mongoose.model('User', userSchema);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/7cques', {
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

// Example usage of the User model
const newUser = new User({
    name: 'John Doe',
    email: 'john@example.com',
    age: 25
});

newUser.save()
.then(() => {
    console.log('User saved successfully:', newUser);
})
.catch((err) => {
    console.error('Error saving user:', err);
});
