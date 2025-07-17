const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { auth } = require("../middlewares/auth");
const passport = require("passport");

router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/profile", auth, userController.profile);
router.post("/", userController.register);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  userController.googleCallBack
);
router.post("/google/verify-otp", userController.verifyOtp);

router.get("/", userController.getAllUsers);
router.patch("/:id", auth, userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.get("/:id", auth, userController.findUserById);

module.exports = router;
