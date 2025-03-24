const user = require("../models/user.Model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const blackListTokenModel = require("../models/blackListToken.model");
const captain = require("../models/captian.model");
//
module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized Token Is Not There USer" });
  }
  const isBlackList = await blackListTokenModel.findOne({ token: token });
  if (isBlackList) {
    return res.status(401).json({
      message: "Unauthorized Blacklist",
    });
  }
  try {
    //   yaha sirf id milegi
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userdata = await user.findById(decoded._id);
    req.userdata = userdata;

    return next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Unauthorized Access User" });
  }
};
//
module.exports.authCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized token captian" });
  }

  const isBlacklisted = await blackListTokenModel.findOne({ token: token });

  if (isBlacklisted) {
    return res.status(401).json({ message: "Unauthorized Blacklist Captin" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const captaindata = await captain.findById(decoded._id);
    req.captaindata = captaindata;

    return next();
  } catch (err) {
    console.log(err);

    res.status(401).json({ message: "Unauthorized captain" });
  }
};
