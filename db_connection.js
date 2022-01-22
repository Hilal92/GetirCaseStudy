const mongoose = require("mongoose");

const { DB_URI, DB_NAME } = require('./config');


module.exports.connectDB = async ()=>{
    mongoose.connect(DB_URI,
        {
            dbName: DB_NAME,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
};

