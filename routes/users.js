const express = require('express');
const router = express.Router();
const {User,validUser, getToken, validLogin} = require('../models/User')
const { auth } = require('../middlewares/auth');
const bcrypt = require("bcrypt");
const {pick} = require("lodash")

router.get('/', (req,res) => {
  res.json({users:"Up and runnning"})
})

router.get("/authUser", auth , (req,res) => {
  res.json({status:"ok"})
})

router.post('/signup',async(req,res) => {
  let validBody = validUser(req.body);
  if(validBody.error) return res.status(400).json(validBody.error.details);
  try{
      let user = new User(req.body);
      if(user.password !== user.repeatPassword) return res.status(400).json({Error:"Password doesn't match!"});
      let email = await User.findOne({email:req.body.email});
      if(email) return res.status(401)
      .json("User is already exists! Please try to login")

      user.password = await bcrypt.hash(user.password,10);
      user.repeatPassword = await bcrypt.hash(user.password,10);
      await user.save();
      res.status(201).json(pick(user,["name","email","_id","createdAt"]));
  } catch(err) {
      console.log(err);
      res.status(400).json(err);
  }
  
})

router.post('/login', async(req,res) => {
  let validBody = validLogin(req.body);
  if(validBody.error) return res.status(400).json(validBody.error.details);
  try{
      let user = await User.findOne({email:req.body.email});
      if(!user) return res.status(401)
      .json("User or password not found 1")

      let validPass = await bcrypt.compare(req.body.password,user.password);
      if(!validPass) return res.status(401).json("User or password is wrong");
      let token = getToken(user._id);
      res.json({token});
      
  } catch(err) {
      console.log(err);
      res.status(400).json(err);
  }
  
})

module.exports = router;