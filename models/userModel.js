const mongoose = require('mongoose');
const todoSchema = require('./todoSchema');

const userSchema = mongoose.Schema({
    userName: String,
    password: String,

    todos: [todoSchema]
});

const User = new mongoose.model('User', userSchema, 'userData');

module.exports = User;