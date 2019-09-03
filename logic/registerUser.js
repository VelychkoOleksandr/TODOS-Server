const mongoose = require('mongoose');
const dbData = require('../metaData/dbData');
const User = require('../models/userModel');
const userExists = require ('./userExist');

const { url, db } = dbData;

async function registerUser(userName, password) {
    let queryResult = null;

    const user = new User({
        userName,
        password,
        todos: []
    });

    try {
        await mongoose.connect(`mongodb://${url}/${db}`, { useNewUrlParser: true });
        if (await userExists(userName, password, true)) return 'User Exists';
        queryResult = await user.save();

    } catch (error) {
        console.error(error);
        return "Internal Error";
    }

    mongoose.connection.close();

    return queryResult;
}

module.exports = registerUser;