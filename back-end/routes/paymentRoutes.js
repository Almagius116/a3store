const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

router.post("/", paymentController.createPayment);
router.post("/midtrans", paymentController.paymentMidtrans);
router.post("/midtrans-notification", paymentController.midtransNotification);

module.exports = router;
