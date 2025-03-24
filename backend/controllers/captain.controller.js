const captain = require("../models/captian.model");
const captainService = require("../services/captain.services");
const { validationResult } = require("express-validator");
const authhelper = require("../helper/authhelper");
const jwt = require("jsonwebtoken");
const blackListTokenModel = require("../models/blackListToken.model");

//
module.exports.registerCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }
  const { fullname, email, password, vehicle } = req.body;
  //
  const isCaptainAlready = await captain.findOne({ email });
  //
  if (isCaptainAlready) {
    return res.status(200).json({ message: "Captain Already Register" });
  }
  //
  const hashpassword = await authhelper.hashPasswod(password);
  const captianData = await captainService.createCaptain({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashpassword,
    color: vehicle.color,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });
  const token = jwt.sign({ _id: captianData._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  return res.status(200).json({
    token,
    captianData,
  });
};
//
module.exports.loginCaptain = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({
      error: error.array(),
    });
  }
  const { email, password } = req.body;
  const captainData = await captain.findOne({ email }).select("+password");
  if (!captainData) {
    return res.status(401).json({ message: "InValid Email" });
  }
  const isMatch = await authhelper.copmarePassword(
    password,
    captainData.password
  );

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid Password" });
  }

  const token = jwt.sign({ id: captainData._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  res.cookie("token", token);
  return res
    .status(200)
    .json({ message: "Captain Login SuccessFull", token, captainData });
};
//Get Profile OF Captain
module.exports.getCaptainProfile = async (req, res, next) => {
  console.log(req.captaindata);
  return res.status(200).json(req.captaindata);
};
// Logout Captain
module.exports.logoutCaptain = async (req, res, next) => {
  res.clearCookie("token");
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  await blackListTokenModel.create({ token });

  return res.status(200).json({ message: "Logout Success Captain" });
};
