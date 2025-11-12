//-- DATABSE CONNECTION


const mongoose = require('mongoose');
require('dotenv').config();

async function ConnectDB(){
try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected <3');
}catch (err) {
    console.error(err);
    process.exit(1);
}
}

module.exports = ConnectDB;