const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: { type: String, maxLength: 50, required: true },
  email: { type: String, maxLength: 50, required: true },
  phoneno: { type: String, maxLength: 50, required: true },
  password: { type: String, required: true },
  signupdate: { type: String },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
