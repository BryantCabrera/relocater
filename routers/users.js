const express = require('express');
const router = express.Router();
const User = require('../models/user');


// create route
router.post('/', async (req, res) => {
    console.log(req.body, 'user session')
    try {
        const user = await User.create(req.body);
        req.session.logged = true;
        req.session.username = req.body.username;
        req.session.userId = user._id
        console.log('this is the user', user)
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

// show route
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

// edit route
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

// update route
router.put(':/id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.body.id);
        res.json({
            status: 200,
            data: updatedUser
        })
    } catch (err) {
        console.log(err)
        res.send(err)
    }
});

//log-in
// router.post('/login', async (req, res) => {
//     try {
//         //find logged in user //getting username from req.body (username was attached via form and kept in req.body)
//         const loggedUser = await User.findOne({ username: req.body.username })
//         // console.log(loggedUser)
//         //if user exists
//         if (loggedUser) {
//             //check if the passwords match, if they do, redirect to page, if not, keep on splash page with message
//             //calling loggedUser's password from schema and comparing it to the form attached to req.body
//             if (bcrypt.compareSync(req.body.password, loggedUser.password) && req.body.email === loggedUser.email) {
//                 //once find user
//                 //have to set session.message to empty string
//                 req.session.message = '',
//                 req.session.logged = true
//                 req.session.username = loggedUser.username
//                 req.session.userId = loggedUser._id
//                 req.session.user = loggedUser
//                 // res.locals.username = loggedUser.username
//                 res.redirect('/movies')
//             } else {
//                 res.json({
//                     status: 200,
//                     data: 'login successful',
//                     user
//                 })
//             }
//         } else {
//             res.json({
//                 status: 200,
//                 data: 'login successful',
//                 user
//             })
//         }
//     } catch (err) {
//         res.send(err)
//     }
// })

module.exports = router;