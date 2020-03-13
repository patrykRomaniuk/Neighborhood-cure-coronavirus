const mongoose = require('mongoose');

let User = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    avatar: {
        type: String
    }
});

module.exports = User = mongoose.model('user', User);