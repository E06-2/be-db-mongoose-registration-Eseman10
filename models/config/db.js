const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;


const dbURI = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

const connectDB = async() => {
    try {
        await mongoose.connect(dbURI);
        console.log('Mongo is ready!');
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;