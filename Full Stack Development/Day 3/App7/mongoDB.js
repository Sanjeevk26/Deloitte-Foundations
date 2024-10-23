const express = require('express');
const app = express();
const User = require('./Users');
const mongoose = require('mongoose');

const port = 3000;

app.use(express.json());

const mongURI = "mongodb+srv://sanjeev26khatwani:LYqm2BHhEHQrAA36@cluster0.mf5sp.mongodb.net/TestDb?retrywrites=true&w=majority";

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

/*const userSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        age: Number
    });
    
    // Create a model based on the schema
const User = mongoose.model('User', userSchema);*/
app.get('/api/users', async(req,res)=>{
    try{
        const users = await User.find();
        res.json(users);
    }catch(err){
        res.status(500).send(err);
    }
});


app.post('/api/users', async(req,res)=>{
    try{
        const userData = req.body;
        const user = await User.create(userData);
        res.status(201).json(user);
    }catch(err){
        res.status(500).send(err);
    }
});

// Example function to create a new user
/*async function createUser() {
    const user = new User({
        name: 'Sanjeev',
        email: 'Sk@example.com',
        age: 25
    });

    const result = await user.save();
    console.log(result);
}

// Call the function to create a user (optional)
createUser();*/

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });