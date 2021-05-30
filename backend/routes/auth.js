const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const User = require("../models/User");

const { check, validationResult } = require('express-validator/check');

router.post('/', [
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password is required').exists()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const {email, password} = req.body;

        try {
            let user = await User.findOne({email});

            if (!user) {
                return res.status(400).json({errors: [{msg: 'Invalid Credentials'}]});
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({errors: [{msg: "Can't match"}]});
            }
            else{
                return res.send("You have login in");
            }
        }catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    });

module.exports = router;