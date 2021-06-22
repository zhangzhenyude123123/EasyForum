const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const Profile = require('../models/Profile');
const User = require('../models/User');

router.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate(
            'user',
            'name'
        );
        if (!profile) {
            // return res.status(400).json({ msg: 'There is no profile for this user' });
            const data = {
                _id: null,
                user: null,
                __v: 0,
                location: null,
                country: null,
                education: null,
                date: null,
                selectedFile:null
            }
            return res.json(data);
        }

        res.json(profile);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//update profile
router.post(
    '/',
    [
        auth,
        [
            check('sex', 'sex is required')
                .not()
                .isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const {
            sex,
            country,
            education,
            location,
            selectedFile
        } = req.body;

        const profileFields = {};
        profileFields.user = req.user.id;
        if (sex) profileFields.sex = sex;
        if (country) profileFields.country = country;
        if (education) profileFields.education = education;
        if (location) profileFields.location = location;
        if (selectedFile) profileFields.selectedFile = selectedFile;

        const picFields ={};
        if(selectedFile) picFields.userpic = selectedFile;

        try {
            // Using upsert option (creates new doc if no match is found):
            let profile = await Profile.findOneAndUpdate(
                {user: req.user.id},
                {$set: profileFields},
                {new: true, upsert: true}
            );
            await User.findOneAndUpdate(
                {_id: req.user.id},
                {$set: picFields}
            );

            res.json(profile);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);


module.exports = router;