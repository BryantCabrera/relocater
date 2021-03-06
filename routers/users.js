const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');


// Create Route
router.post('/', async (req, res) => {
    let crypted = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    req.body.password = crypted;
    try {
        const user = await User.create(req.body);
        res.json({
            status: 200,
            data: 'login successful',
            user
        });
    } catch(err){
        console.log(err);
        res.send(err);
    }
});

// Log-Out 
router.get('/logout', async(req, res) => {
    req.logout()
    res.json({
        user: req.user
    });
});

// Log-In
router.post('/login', async (req, res) => {
    try {
        //find logged in user //getting username from req.body (username was attached via form and kept in req.body)
        const loggedUser = await User.findOne({ email: req.body.email });
        //if user exists
        if (loggedUser) {
            //check if the passwords match, if they do, redirect to page, if not, keep on splash page with message
            //calling loggedUser's password from schema and comparing it to the form attached to req.body
            if (bcrypt.compareSync(req.body.password, loggedUser.password) && req.body.email === loggedUser.email) {
                //once find user
                //have to set session.message to empty string
                res.json({loggedUser, isLoggedIn: true});
            } else {
                res.json({ isLoggedIn: false});
            }
        } else {
            res.json({
                status: 200,
                data: 'login successful',
                user: loggedUser
            });
        }
    } catch (err) {
        res.send(err);
    }
});

// Show Route
router.get('/:id', async (req, res) => {
    try {
        const foundUser = await User.findById(req.params.id);
        res.json({
            status: 200,
            data: foundUser
        });
    } catch (err) {
        console.log(err);
        res.send(err);
    }
});

// Edit Route
router.post('/:id', async (req, res) => {
    try {
        const foundUser = await User.findById(req.params.id);
        res.json({
            status: 200,
            data: foundUser
        })
    } catch (err) {
        console.log(err);
        res.send(err);
    }
});

// Update Route
router.put('/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json({
            status: 200,
            data: updatedUser
        })
    } catch (err) {
        console.log(err);
        res.send(err);
    }
});

// Delete Route
router.delete('/:id', async (req, res) => {
    try {
       const deletedUser = await User.findByIdAndRemove(req.params.id);
        res.json({
          status: 200,
          data: deletedUser
        });
    } catch(err){
      res.send(err);
    }
});

module.exports = router;