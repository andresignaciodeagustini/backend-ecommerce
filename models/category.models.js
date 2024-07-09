const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 100,
        unique:true,
        required: true,
        index: true,
        trim: true
    },
    description: {
        type: String,
        minlength: 3,
        maxlength: 100,
       
    },


})

module.exports = mongoose.model("Category", categorySchema );