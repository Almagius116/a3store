const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { auth } = require("../middlewares/auth");

router.post("/login", userController.login);
router.get("/profile", auth, userController.profile);
router.post("/", userController.register);

router.get("/", userController.getAllUsers);
router.patch("/:id", auth, userController.updateUser);
router.delete("/:id", userController.deleteUser);
router.get("/:id", auth, userController.findUserById);

module.exports = router;
