const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

//provide verification
const { check, validationResult } = require('express-validator/check');

const Post = require('../models/Post');
const Profile = require('../models/Profile');
const User = require('../models/User');

router.post(
    '/',
    [
        auth,
        [
            check('text', 'Text is required').not().isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const user = await User.findById(req.user.id).select('-password');

            const newPost = new Post({
                text: req.body.text,
                name: user.name,
                user: req.user.id
            });

            const post = await newPost.save();

            res.json(post);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

//get all post
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().sort({ date: -1 });
        res.json(posts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//get all post by userid
router.get('/user/:id', auth, async (req, res) => {
    try {
        const posts = await Post.find({user:req.params.id}).sort({ date: -1 });
        res.json(posts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//get one post by id
router.get('/:id',async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        // Check for ObjectId format and post
        if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !post) {
            return res.status(404).json({ msg: 'Post not found' });
        }
        console.log(res.json);
        res.json(post);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//like the post
router.put('/like/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        // Check if the post has already been liked
        if (post.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
            // return res.status(400).json({ msg: 'Posts already liked' });
            const removeIndex = post.likes
                .map(like => like.user.toString())
                .indexOf(req.user.id);
            post.likes.splice(removeIndex, 1);
            await post.save();
            res.json(post.likes);
        }
        else {
            post.likes.unshift({user: req.user.id});
            await post.save();
            res.json(post.likes);
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.put('/notlike/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        // Check if the post has already been liked
        if (post.unlikes.filter(unlike => unlike.user.toString() === req.user.id).length > 0) {
            // return res.status(400).json({ msg: 'Posts already unliked' });
            const removeIndex = post.unlikes
                .map(unlike => unlike.user.toString())
                .indexOf(req.user.id);
            post.unlikes.splice(removeIndex, 1);
            await post.save();
            res.json(post.unlikes);
        }
        else {
            post.unlikes.unshift({user: req.user.id});
            await post.save();
            res.json(post.unlikes);
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

//add comment
router.post(
    '/comment/:id',
    [
        auth,
        [
            check('text', 'Text is required')
                .not()
                .isEmpty()
        ]
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const user = await User.findById(req.user.id).select('-password');
            const post = await Post.findById(req.params.id);

            const newComment = {
                text: req.body.text,
                name: user.name,
                user: req.user.id
            };

            post.comments.unshift(newComment);

            await post.save();

            res.json(post.comments);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

module.exports = router;