const crypto = require('crypto')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt= require('jsonwebtoken')


const UserSchema = new mongoose.Schema({
    name:{
        type : String,
        required : [true,"Please provide a name"]
    },
    email: {
        type : String,
        required : [true,"Please provide email address"],
        match : [
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, "Please provide a valid email address"
        ]
    },
    phone: {
        type : String,                                                             
        required : [true,"Please provide a phone no."],
    },

    date : {
        type : String,
        required : true
    },
    issue : { type : String, required: true},
    time : {
        type : String,
        required : true
    },
},{timestamps: true})



const User  = mongoose.model("User",UserSchema)
module.exports = User