const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobile: String,
    emailId: String,
    password: String,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    age: Number,
    post: {type:[],default:[]}
}, {timestamp : true});

module.exports = mongoose.model('UserDataAuth', userSchema)