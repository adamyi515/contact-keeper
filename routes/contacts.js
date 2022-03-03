const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');


// @route   GET /api/contacts
// @desc    Get all contacts for a specific user.
// @route   Private
router.get('/', auth, async (req, res) => {
    try{
        const getContacts = await Contact.find({ user: req.user.id});
        res.json(getContacts);
    } catch(error){
        console.error(error);
        return res.status(500).send('Server Error.');
    }
});



// @route   POST /api/contacts
// @desc    Add a Contact
// @route   Private
router.post('/', [auth, [
    check('name', 'Please enter a name.').notEmpty(),
    check('email', 'Please enter a valid email address.').isEmail(),
    check('phone', 'Please enter a phone number.').notEmpty()
]], async (req, res) => {

    // Validate the data passing in.
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ msg: errors.array() })
    }

    const { name, email, phone, type } = req.body;

    try{
        const newContact = new Contact({
            name, email, phone, type, user: req.user.id
        });

        await newContact.save();

        return res.status(201).json(newContact);

    } catch(error){
        console.error(error);
        return res.status(500).send('Server Error.');
    }

})


// @route   PUT /api/contacts/:id
// @desc    Update a Contact
// @route   Private
router.put('/:id', auth, async (req, res) => {
    const id = req.params.id;
    const userId = req.user.id;

    const { name, email, phone, type } = req.body;

    try{
        
        // Find the contact first by its id.
        let foundContact = await Contact.findById(id);
        if(!foundContact){
            return res.status(404).json({ msg: 'Contact user not found.'} );
        }

        // Then check to see whether the current logged in user can Update the Contact info.
        if(foundContact.user.toString() !== userId){
            return res.status(401).json({ msg: 'User is NOT allowed to update the contact.'})
        }

        // If found Contact AND current logged in user CAN update it, then update it.
        const updatedContactData = {}

        if(name) updatedContactData.name = name;
        if(email) updatedContactData.email = email;
        if(phone) updatedContactData.phone = phone;
        if(type) updatedContactData.type = type;

        foundContact = await Contact.findByIdAndUpdate(id, updatedContactData, { new: true });

        res.status(200).json(foundContact);

    }catch(error){
        console.error(error);
        return res.status(500).send('Server Error.');
    }

})


// @route   DELETE /api/contacts/:id
// @desc    Delete/remove a Contact
// @route   Private
router.delete('/:id', auth, async (req, res) => {
    const id = req.params.id;
    const userId = req.user.id;
    try{
        // First, check to see if the Contact user exist.
        const foundContact = await Contact.findById(id);
        if(!foundContact){
            return res.status(404).json({ msg: 'Contact user not found.'} );
        }

        // Then verify the current user logged in with the token can delete the Contact.
        if(foundContact.user.toString() !== userId){
            return res.status(401).json({ msg: 'User is NOT allowed to delete the contact.'});
        }

        // If the current user is allowed to delete Contact, then delete it.
        await Contact.findByIdAndRemove(id);
        return res.status(200).json({ msg: 'Contact user deleted.'} );

    } catch(error){
        console.error(error);
        return res.status(500).send('Server Error.');
    }

})


module.exports = router;