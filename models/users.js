const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true},
  userCounty: String,
  userIncome: Number,
  counties: [ { type: mongoose.Schema.ObjectId, ref: "County"} ],


});

module.exports = mongoose.model('User', UserSchema);