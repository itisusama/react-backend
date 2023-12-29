// const mongoose = require('mongoose');
// When you use { Schema, model } you don't need to use mongoose.Schema and mongoose.model
const { Schema, model } = require('mongoose');
// Aik schema banta hai or vo compile hota hai models k ander ja kar.
const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
});

//The function takes ("connection string", schema)
const userModel = model("loginModel", userSchema);
// Export the user model
module.exports = userModel;