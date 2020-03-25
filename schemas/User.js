const mongoose = require('mongoose');
const geocoder = require('../utils/geocoder');

let User = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
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
    phone: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    location: {
        zipCode: {
            type: String
        },
        country: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
    },
    locationCoordinates: {
        coordinates: {
            type: [Number],
            index: '2dsphere'
          },
        formattedAddress: String
    },
    description: {
        type: String
    },
    avatar: {
        type: String
    }
});

User.pre('save', async function(next){
    const loc = await geocoder.geocode(`${this.location.country},${this.location.city},${this.location.address}`);
    this.locationCoordinates = {
        coordinates: [loc[0].longitude, loc[0].latitude],
        formattedAddress: loc[0].formattedAddress
    }
    //this.address = undefined;
    next();
})

module.exports = User = mongoose.model('user', User);