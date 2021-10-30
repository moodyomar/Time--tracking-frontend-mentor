const mongoose = require('mongoose');
const Joi = require('joi');
const jwt = require('jsonwebtoken')
const { config } = require('../config/jk');

const userSchema = new mongoose.Schema({
  name:String,
  email:String,
  password:String,
  repeatPassword:String,
  createdAt: {
    type: Date, default: Date.now()
  }
})

exports.User = mongoose.model("users",userSchema);

exports.getToken = (_userId) => {
  let token = jwt.sign({ _id: _userId }, config.jwtSecret, { expiresIn: "60mins" });
  return token;
}

exports.validUser = (_body) => {
  let user = Joi.object({
    name:Joi.string().min(2).required(),
    email:Joi.string().min(6).email().required(),
    password:Joi.string().min(6).required(),
    repeatPassword:Joi.string().min(6).required(),
  })
  return user.validate(_body);
  }

  exports.validLogin = (_body) => {
    let user = Joi.object({
      email: Joi.string().min(2).max(99).email().required(),
      password: Joi.string().min(2).max(99).required()
    })
    return user.validate(_body)
  }