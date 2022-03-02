const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

// Models
const User = require('../models/User');

// @route   POST /api/users
// @desc    Allow users to register to the Contact Keeper App.
// @access  Public
router.post('/',[
    check('name', 'Name is required.').not().isEmpty(),
    check('email', 'Email needs to be valid.').isEmail(),
    check('password', 'Password needs to be at least 6 characters long.').isLength({ min: 6 })
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ msg: errors.array() })
    }

    const { name, email, password } = req.body;

    try{
        // Check to see if the user with that email already exist within our DB.
        let user = await User.findOne({ email });
        if(user){
            return res.status(400).json({ msg: 'User with that email already exists.' });
        }

        // If user with that email DOES NOT EXIST, then instantiate the User model.
        user = new User({
            name,
            email,
            password
        });

        // Hash the password using bcryptjs
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        // After saving to the database, return a json web token for security. Need to authenticate and protect routes.
        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, config.get('jwtSecret'), {
            expiresIn: 360000
        }, (err, token) => {
            if(err){
                throw err.message;
            }
            res.json(token);
        });

    } catch(err){
        console.error(err);
        return res.status(500).send('Server Error');
    }

});



module.exports = router;