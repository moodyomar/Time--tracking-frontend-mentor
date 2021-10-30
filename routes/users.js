const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  res.json({users:"Up and runnning"})
})

module.exports = router;