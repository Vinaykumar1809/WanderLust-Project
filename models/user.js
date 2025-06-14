const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email:{
type: String,
  required: [true, 'Email is required'],
  lowercase: true,
  trim: true,
  unique: true,
  match: [
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    'Please fill in a valid email address'
  ]
    }
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User",userSchema);
