const mongoose = require('mongoose');

const schema = mongoose.Schema

const userSchema = new schema({
    name : {
        type : String,
        required : true
    } ,
    phone: {
            type : Number,
            required : true
    },
    password:  {
        type : String,
        required : true
    } ,
    gender: {
        type : String,
        required : true
    } ,
    email : {
        type : String,
        unique : true,
        required : true
    } ,
    course :  {
        type : String,
        required : true
    } ,
    telugu :  {
        type : Boolean
    } ,
    hindi : {
        type : Boolean 
    } ,
    english :  {
        type : Boolean
    } ,
})

module.exports = mongoose.model('user', userSchema ,'registration');