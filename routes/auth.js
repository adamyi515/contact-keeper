const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');

// Model
const User = require('../models/User');

// @route   GET /api/auth
// @desc    Get logged in User.
// @access  Private
router.get('/', auth, async (req, res) => {

    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch(error){
        console.error(error);
        return res.status(500).json({ msg: 'Server Error.'} );
    }

});


// @route   POST /api/auth
// @desc    Validate User's email and password.
// @access  Public
router.post('/', [
    check('email', 'Please include a valid email address.').isEmail(),
    check('password', 'Please include a password.').exists()
], async (req, res) => {

    // Validate the email and password is coming in from the req body.
    const errors = validationResult(req);
    if(!errors.isEmpty())
        return res.status(400).json({ msg: errors.array() });

    const { email, password } = req.body;

    try {

        // Check to see if email exist within DB.
        const user = await User.findOne({ email });
        if(!user){
            return res.status(404).json({ msg: 'User with that email does not exist.' });
        }   

        // If email exist then compare the password.
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({ msg: 'Password does not match.'} );
        }

        // If email exist AND password match, then generate jwt.
        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, config.get('jwtSecret'), {
            expiresIn: 36000
        }, (error, token) => {
            if(error) throw error;
            return res.json(token);
        });

    } catch(error){
        console.error(error);
        return res.status(500).send('Server Error')
    }

});



module.exports = router;