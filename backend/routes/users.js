const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const {check,validationResult} = require('express-validator/check');

//provide user certificate
const jwt = require('jsonwebtoken');
const config = require('config');

const User = require("../models/User");

router.post('/', [
   check('name',"Name is not Empty").not().isEmpty(),
   check('email', 'Please include a valid email').isEmail()
],
    async(req,res) =>{

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password } = req.body;

        try {
            let user = await User.findOne({email});
            if (user) {
                return res.status(400).json({errors: [{msg: 'User have existed,Change the email'}]});
            }

            const userpic = 'null';
            user = new User({
               name,
               email,
               password,
               userpic
            });

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password,salt);

            await user.save();

            //verification
            const usermod = {
                user: {
                    id: user.id
                }
            };
            jwt.sign(
                usermod,
                config.get('jwtSecret'),
                { expiresIn: 360000 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );

            //res.send("User is OK!!!");
        }catch (err){
            console.error(err.message);
            res.status(500).send("Serer erro");
        }
});


module.exports = router;
