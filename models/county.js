const mongoose = require('mongoose');


const CountySchema = new mongoose.Schema({
  countyName: String,
  averageIncome: Number,
  averageHouseCost: Number
});



module.exports = mongoose.model('County', CountySchema);