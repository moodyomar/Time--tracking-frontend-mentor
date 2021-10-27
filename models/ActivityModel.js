const mongoose = require('mongoose');
const Joi = require('joi');

const activitySchema = new mongoose.Schema({
  category:String,
  activity:String,
  time:String,
  // date:Date.now()
})

exports.ActivityModel = mongoose.model("activites",activitySchema)

exports.validActivity = (_body) => {
let activity = Joi.object({
  category:Joi.string().required(),
  activity:Joi.string().min(6),
  time:Joi.string().required()
})
return activity.validate(_body);
}