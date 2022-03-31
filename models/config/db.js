const mongoose = require('mongoose');

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