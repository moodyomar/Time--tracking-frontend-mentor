const jwt = require('jsonwebtoken');
const {config} = require('../config/jk')

exports.auth = (req,res,next) => {
  let token = req.header('x-auth-token');
  if(!token) return res.status(401).json({msg:'no token, authorization denied'});
  try{
      const decoded = jwt.verify(token,config.jwtSecret);
      req.tokenData = decoded;
      // req.user = decoded.user;
      next()
  } catch(err) {
      console.log(err);
      res.status(401).json({msg:'Token is not valid'});
    }
  
}
