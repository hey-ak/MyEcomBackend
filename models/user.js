const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },

  lastname: String,
});

const User = mongoose.model("User", userSchema);
module.exports = User;
