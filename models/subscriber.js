const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    subscribeDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    email: {
        type: String
        
    },
    region: {
        type: String
    },
    aadhar: {
        type: String
    },
    gender: {
        type: String
    },
    subscribedToChannel: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Subscriber', subscriberSchema)