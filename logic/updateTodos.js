const mongoose = require('mongoose');
const User = require('../models/userModel');
const dbData = require('../metaData/dbData');
const userExists = require('./userExist');

const { url, db } = dbData;

async function updateTodos(userName, password, todo) {
    let queryResult = null;

    try {
        await mongoose.connect(`mongodb://${url}/${db}`, { useNewUrlParser: true, useFindAndModify: false });
        if (!(await userExists(userName, password, true))) return `User Not Found. Cant't Update`;
        queryResult = await User.updateOne({ userName, password }, {  todos: todo });
        if (queryResult.ok != 1) queryResult = "Internal Error";
        else queryResult = 'Updated';
    } catch (error) {
        console.error(error);
    }

    mongoose.connection.close();
    return queryResult;
};

module.exports = updateTodos;