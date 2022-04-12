const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    bookName : {
        type : String,
        unique :true,
        required : true
    },
    authorName : String,
    category : String,
    year : String,
},{timestamp : true});

module.exports = mongoose.model('student',bookSchema)