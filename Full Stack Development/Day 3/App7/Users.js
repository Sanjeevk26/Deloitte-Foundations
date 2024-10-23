const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define a schema (for demonstration)
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    }
});


userSchema.pre("save", async function () {
        this.password = await bcrypt.hash(this.password, 12);
        });
// Create a model based on the schema
//const User = mongoose.model('User', userSchema);
module.exports = mongoose.model('User', userSchema);