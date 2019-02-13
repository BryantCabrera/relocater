const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
  username: String,
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  googleId: String,
  userCounty: String,
  userIncome: Number,
  counties: [ { type: mongoose.Schema.ObjectId, ref: "County"} ]
});

//YouTube tutorial schema
// const UserSchema = new mongoose.Schema({
//   method: {
//     type: String,
//     enum: ['local', 'google'],
//     required: true
//   },
//   local: {
//     username: String,
//     email: String,
//     password: String,
//     userCounty: String,
//     userIncome: Number,
//     counties: [ { type: mongoose.Schema.ObjectId, ref: "County"} ]
//   },
//   google: {
//     username: String,
//     email: String,
//     googleId: String,
//     userCounty: String,
//     userIncome: Number,
//     counties: [ { type: mongoose.Schema.ObjectId, ref: "County"} ]
//   },
  
// });

module.exports = mongoose.model('User', UserSchema);