const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    username:{type: String, required: true },  
    email: { type: String, required: true, unique: true },
    password: String,
});

module.exports = mongoose.model("User",userSchema);