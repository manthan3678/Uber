const user = require("../models/user.Model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//
module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized Token Is Not There" });
  }
  try {
    //   yaha sirf id milegi
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userdata = await user.findById(decoded._id);
    req.userdata = userdata;
    return next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Unauthorized Access" });
  }
};
