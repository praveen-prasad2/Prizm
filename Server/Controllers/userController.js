const userModel = require("../Models/userModel");

const bcrypt = require("bcrypt");

//Signup

const signUp = async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    req.body.signupdate = new Date();
    let data = await userModel.create(req.body);
    res.json({
      success: true,
      message: "User Registration successful",
    });
    console.log(req.body);
  } catch (error) {
    res.json({
      success: false,
      message: "Try again",
    });
    console.log(error);
  }
};

//Signin

const signIn = async (req, res) => {
  try {
    let user = await userModel.findOne({ username: req.body.username });
    if (user) {
      const existUser = await bcrypt.compare(req.body.password, user.password);
      if (existUser) {
        res.json({
          success: true,
          message: "success",
          user,
        });
      } else {
        res.json({
          success: false,
          message: "check Password",
        });
      }
    } else {
      res.json({
        success: false,
        message: "wrong password",
      });
    }
  } catch (error) {
    res.json({
      success: false,
      message: "unsuccessful",
    });
    console.log(error);
  }
};

module.exports = { signUp, signIn };
