const mongoose = require('mongoose');

const Schema =new  mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    substoChannel:{
        type:String,
        required:true

    },
    subsDate:{
        type:Date,
        required:true,
        default:Date.now

    }
})

module.exports= mongoose.model('Subscriber',Schema);