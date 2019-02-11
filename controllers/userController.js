const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/', async (req, res) => {
//   console.log(req.body, 'user session')
  try {
    const user = await User.create(req.body);
    req.session.logged = true;
    req.session.username = req.body.username;
    res.json({
      status: 200,
      data: 'login successful'
    });

  } catch(err){
    console.log(err);
    res.send(err);
  }
});


router.get('/:id', async (req, res) => {
    // console.log(req.body)
    try {
        const foundUser = await User.findById(req.params.id);
        res.json({
            status: 200,
            data: foundUser
        });
    }
})



module.exports = router;