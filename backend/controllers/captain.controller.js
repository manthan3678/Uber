const captain = require("../models/captian.model");
const captainService = require("../services/captain.services");
const { validationResult } = require("express-validator");
const authhelper = require("../helper/authhelper");
const jwt = require("jsonwebtoken");
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
