const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
  name:String,
  email:String,
  password:String,
  repeatPassword:String,
  date:String
})

exports.Activity = mongoose.model("users",userSchema)