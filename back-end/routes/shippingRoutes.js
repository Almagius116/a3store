const express = require("express");
const router = express.Router();
const shippingController = require("../controllers/shippingController");

router.get("/", shippingController.getAllShipping);
router.post("/", shippingController.createShipping);
// router.get("/:id", categoryController.getCategoryById);
router.patch("/:id", shippingController.updateShipping);
// router.delete("/:id", categoryController.deleteCategory);

module.exports = router;
