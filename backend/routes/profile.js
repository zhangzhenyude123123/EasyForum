const express = require('express');
const router = express.Router();

router.get('/',
    (req,res)=>res.send("2131"));

module.exports = router;