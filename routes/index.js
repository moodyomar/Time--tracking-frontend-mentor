const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  res.json({status:"Up and runnning"})
})

module.exports = router;