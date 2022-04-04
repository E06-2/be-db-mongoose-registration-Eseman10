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

    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other', 'N/A'],
        default: 'N/A',
        required: true
    }
});

module.exports = User = mongoose.model("users", UserSchema);