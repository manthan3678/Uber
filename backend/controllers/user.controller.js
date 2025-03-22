const user = require("../models/user.Model");
const userService = require("../services/user.services");
const { validationResult } = require("express-validator");
module.exports.registerUser = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }
  const { fullname, email, password } = req.body;
  const hasedPassword = await user.hashPassword(password);
  const userData = await userService.createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hasedPassword,
  });
  const token = user.generateAuthToken();
  return res.send(200).json({ token, userData });
};
