const user = require("../models/user.Model");
module.exports.createUser = async ({
  firstname,
  lastname,
  email,
  password,
}) => {
  if (!firstname || !email || !password) {
    throw new Error("all field is required");
  }
  const userData = user.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
  });
  return userData;
};
