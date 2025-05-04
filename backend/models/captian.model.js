const mongoose = require("mongoose");

const captainSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "First Name Max len 3"],
    },
    lastname: {
      type: String,
      minlength: [3, "Last Name minimum 3 char"],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  vehicle: {
    color: {
      type: String,
      required: true,
      minlength: [3, "minimum char 4"],
    },
    plate: {
      type: String,
      required: true,
      minlength: [6, "minimum length of no plate is 6"],
    },
    capacity: {
      type: Number,
      required: true,
      min: [1, "Capacity of Vehicle is 1"],
    },
    vehicleType: {
      type: String,
      required: true,
      enum: ["car", "moto", "auto"],
    },
  },
  location: {
    lat: {
      type: Number,
    },
    log: {
      type: Number,
    },
  },
});

const captain = mongoose.model("captain", captainSchema);

module.exports = captain;
