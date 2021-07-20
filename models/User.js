const crypto = require("crypto");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },
  issue: { type: String, required: true },
  time: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
