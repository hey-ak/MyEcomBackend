const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: false,
  },

  lastname: String,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  address: String,
  mobileNo: {
    type: String,
    required: false,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
