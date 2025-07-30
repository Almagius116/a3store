const express = require("express");
const router = express.Router();
const shippingController = require("../controllers/shippingController");

router.get("/", shippingController.getAllShipping);
router.post("/", shippingController.createShipping);
router.post("/calculate-cost", shippingController.calculateShippingCost);
router.get("/get-district", shippingController.getDistrict);
router.patch("/:id", shippingController.updateShipping);

module.exports = router;
