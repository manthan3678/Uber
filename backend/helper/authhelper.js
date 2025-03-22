const bcrypt = require("bcrypt");

module.exports.hashPasswod = async (password) => {
  try {
    const hashpassword = await bcrypt.hash(password, 10);
    return hashpassword;
  } catch (error) {
    console.log(error);
  }
};

// password or hashpassword jo return hora hai vo yaha ayega
module.exports.copmarePassword = async (password, hashpassword) => {
  return bcrypt.compare(password, hashpassword);
};
