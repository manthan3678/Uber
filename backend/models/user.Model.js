const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "First Name must be atleast 3 char"],
    },
    lastname: {
      type: String,
      minlength: [3, "LAst Name must be atleast 3 char"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, "Must be 5 char"],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
  },
});

//  !@#$* This Function Is moved in the another folder that is auth helper !@$#*

// userSchema.methods.generateAuthToken = function () {
//   const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
//   return token;
// };
// comparePassword
// userSchema.methods.comparePassword = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };

// userSchema.statics.hashPassword = async function (password) {
//   return await bcrypt.hash(password, 10);
// };

const user = mongoose.model("user", userSchema);
module.exports = user;
