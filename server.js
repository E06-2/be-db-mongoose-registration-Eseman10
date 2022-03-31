const express = require('express');
const path = require('path');
const app = express();



const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        default: Date.now
    },
    gender: {
        type: String,
        required: true
    }
});

module.exports = User = mongoose.model("users", UserSchema);