const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String, 
    email: String,
    password: String
});

// Modelo
const Userdb = mongoose.model('Userdb', userSchema);

module.exports = Userdb;