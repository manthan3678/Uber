const user = require("../models/user.Model");
const userService = require("../services/user.services");
const authhelper = require("../helper/authhelper");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
//  !!!!!!!!!11 REgister Controller !!!!!!!!!!!!
module.exports.registerUser = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  const { fullname, email, password } = req.body;
  const hasedPassword = await authhelper.hashPasswod(password);
  const userData = await userService.createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hasedPassword,
  });
  const token = jwt.sign({ _id: userData._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  return res
    .status(200)
    .json({ token, userData, message: "Register SuccessFully" });
};

// ########### LOGIN Controller ##############
module.exports.loginUser = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  const { email, password } = req.body;
  // user ko check kroge to selecr('password") uska password bi le kr ana
  const userData = await user.findOne({ email }).select("password");
  if (!userData) {
    return res.status(401).json({
      message: "Invalid Email Or Password",
    });
  }
  const isMatch = await authhelper.copmarePassword(password, userData.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const token = jwt.sign({ _id: userData._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.cookie("token", token);
  return res.status(200).json({
    token,
    userData,
    message: "Login SuccessFull",
  });
};

// !!!!!!!!!!!! get User Profile !!!!!!!!!!!
module.exports.getUserProfile = async (req, res, next) => {
  res.status(200).json(req.userdata);
  // console.log(req.userdata);
};
