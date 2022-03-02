const express = require('express');
const router = express.Router();
const {} = require('express-validator');
const User = require('../models/User');

// @route   POST /api/users
// @desc    Allow users to register to the Contact Keeper App.
// @access  Public
router.post('/', (req, res) => {

    const { name, email, password } = req.body;
    res.send(req.body);

});



module.exports = router;