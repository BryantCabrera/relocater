const express = require('express');
const router = express.Router();
const County = require('../models/county');

// index route
router.get('/', async (req, res, next) => {
  // req.body this is from the fetch request
  // console.log(req.body, ' this is get all')
  try  {
    const allCounties = await County.find();
      res.json({
      status: 200,
      data: allCounties
    });

  } catch (err){ 
    res.send(err)
  }
});

// show route
router.get('/:id', async (req, res, next) => {
  try  {
      const foundCounty = await County.findById(req.params.id);
      res.json({
          status: 200,
          data: foundCounty
      });
  } catch (err){
  res.send(err);
  }
});

module.exports = router