const express = require('express');
const router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { user: req.user });
});

router.get('/auth/google', passport.authenticate(
  "google", 
  { scope: ["profile", "email"] }
));

router.get('/oauth2callback', passport.authenticate(
  "google",
  { 
    successRedirect: "/home",
    //can redirect to whatever you want
    failureRedirect: "/"
  }
));

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;