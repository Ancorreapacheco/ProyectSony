import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    username: String, 
    email: String,
    password: String
});

// Modelo
const Username = mongoose.model('Username', userSchema);

module.exports = Username;