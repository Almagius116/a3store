const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.get("/", orderController.getAllOrder);
router.post("/", orderController.createOrder);
router.get("/:id", orderController.getOrderById);
router.patch("/:id", orderController.updateOrder);
router.delete("/:id", orderController.deleteOrder);

module.exports = router;
