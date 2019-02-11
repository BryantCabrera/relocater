const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
  username: String,
  email: {type: String, required: true, unique: true},
  googleId: String,
  userCounty: String,
  userIncome: Number,
  counties: [ { type: mongoose.Schema.ObjectId, ref: "County"} ]
});

module.exports = mongoose.model('User', UserSchema);