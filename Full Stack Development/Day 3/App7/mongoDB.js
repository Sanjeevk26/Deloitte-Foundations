const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;

app.use(express.json());

const mongURI = "mongodb+srv://sanjeev26khatwani:**********@cluster0.mf5sp.mongodb.net/TestDb";

// Connect to MongoDB
mongoose.connect(mongURI, {
        useNewUrlParser: true,  // Ensure the new MongoDB connection string parser is used
            useUnifiedTopology: true  // Enable the new MongoDB unified topology engine
            })
            .then(() => console.log('Connected to MongoDB...'))
            .catch(err => console.error('Could not connect to MongoDB...', err));

app.get('/', (req, res) => {
    res.send('Connected ');
    });            

    // Start the server
// Define a schema (for demonstration)
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

// Example function to create a new user
async function createUser() {
    const user = new User({
        name: 'John Doe',
        email: 'john@example.com',
        age: 30
    });

    const result = await user.save();
    console.log(result);
}

// Call the function to create a user (optional)
createUser();

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });