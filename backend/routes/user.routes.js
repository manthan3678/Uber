const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middleware/auth.middleware");
// Register Routes !!!!!!!!!!
router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("Name must be 3 Char"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password Must Be ^ char long"),
  ],
  userController.registerUser
);
// !!!!!!! Login Routes !!!!!
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password Must Be ^ char long"),
  ],
  userController.loginUser
);
// !!!!!!!! Get USer Profile !!!!!!
router.get("/profile", authMiddleware.authUser, userController.getUserProfile);
module.exports = router;
