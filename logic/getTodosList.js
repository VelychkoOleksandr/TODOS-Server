const mongoose = require('mongoose');
const User = require('../models/userModel');
const dbData = require('../metaData/dbData');
const userExists = require('./userExist');

const { url, db } = dbData;

async function getTodosList(userName, password) {
    let queryResult = "Initial Status";

    //CHECK IF USER IN DB
    if (!(await userExists(userName, password, false))) {
        queryResult = "User Not Found";
        return queryResult;
    }
    
    //GETTING USER TODOS
    try {
        await mongoose.connect(`mongodb://${url}/${db}`, { useNewUrlParser: true, useFindAndModify: false });
        let queries = await User.findOne({ userName, password }, {_id: 0, userName: 0, password: 0});
        if (queries) queryResult = queries.todos;
    } catch (error) {
        console.error(error);
        queryResult = "Internal Error";
    }

    mongoose.connection.close();
    
    return queryResult;
};

module.exports = getTodosList;