const express = require('express');
const { validActivity, ActivityModel } = require('../models/ActivityModel');
const router = express.Router();

router.get('/', (req,res) => {
  res.json({status:"activity is up & runnning"})
})

// @route   POST api/posts
// @desc    Create a post
// @access  Private
router.post('/', async(req,res) => {
let validBody = validActivity(req.body);
if(validBody.error){
return res.status(500).json({msg:validBody.error.details});
}
try{

let activity =  new ActivityModel(req.body);
await activity.save()
res.status(201).json(activity)
} catch(err) {
    console.log(err);
    res.status(400).json(err);
}


})

module.exports = router;