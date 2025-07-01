const express = require("express");
const router = express.Router();
const orderItemController = require("../controllers/orderItemController");

router.get("/", orderItemController.getAllOrderItem);
router.post("/", orderItemController.createOrderItem);
router.get("/:id", orderItemController.getOrderItemById);
router.patch("/:id", orderItemController.updateOrderItem);
router.delete("/:id", orderItemController.deleteOrderItem);

module.exports = router;
