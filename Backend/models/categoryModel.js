const mongoose = require('mongoose')

const Schema = mongoose.Schema

const useSchema = new Schema({
    _id:{
        type:Number,
        required:true,
    },
    categorytype:{
        type: String,
        required:true,
    }

});

module.exports = mongoose.model('Category',useSchema,'category');