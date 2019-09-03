const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
        todosID: Number,
        todosText: String,
        complete: Boolean,
        createDate: Date,
        expires: Boolean,
        expiresDate: Date,
        updated: Boolean,
        updateDate: Date
});

module.exports = todoSchema;