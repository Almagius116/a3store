const express = require("express");
const router = express.Router();
const shippingController = require("../controllers/shippingController");

// router.get("/", categoryController.getAllCategory);
router.post("/", shippingController.createShipping);
// router.get("/:id", categoryController.getCategoryById);
// router.patch("/:id", categoryController.updateCategory);
// router.delete("/:id", categoryController.deleteCategory);

module.exports = router;
