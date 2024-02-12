const mongoose = require('mongoose')

const Schema = mongoose.Schema

const useSchema = new Schema({
    title:{
        type: String,
        required: true,
        },
    description:{
        type: String,
        required:true,
    },
    image:{
        type: String,
        required:true,
    },
    price:{
        type: String,
        required:true,
    },
    category : {
        type : String,
        required: true,
    },
    size : {
        type: Array,
        required: true,

    }
})

module.exports = mongoose.model('Product',useSchema);