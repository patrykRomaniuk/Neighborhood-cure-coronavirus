const mongoose = require('mongoose');
const geocoder = require('../utils/geocoder');

let TaskSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    description: {
        type: String
    },
    phone: {
        type: Number,
        required: [true, 'Please add number']
    },
    city: {
        type: String,
        required: [true,'Please put city']
    },
    country: {
        type: String,
        required: [true,'Please put country']
    },
    address: {
        type: String,
       /* required: [true,'Please add an address']*/
    },
    location: {
        type: {
          type: String,
          enum: ['Point']
        },
        coordinates: {
          type: [Number],
          index: '2dsphere'
        },
        formattedAddress: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

TaskSchema.pre('save', async function(next){
    const loc = await geocoder.geocode(`${this.country},${this.city},${this.address}`);
    this.location = {
        type: 'Point',
        coordinates: [loc[0].longitude, loc[0].latitude],
        formattedAddress: loc[0].formattedAddress
    }
    //this.address = undefined;
    next();
})

module.exports = TaskSchema = mongoose.model('tasks', TaskSchema);