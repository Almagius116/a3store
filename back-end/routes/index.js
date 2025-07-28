const router = require("express").Router();

const User = require("./userRoutes");
const Category = require("./categoryRoutes");
const Product = require("./productRoutes");
const Order = require("./orderRoutes");
const OrderItem = require("./orderItemRoutes");
const Payment = require("./paymentRoutes");
const UploadImage = require("./uploadImageRoutes");
const Shipping = require("./shippingRoutes");
const Province = require("./provinceRoutes");
const City = require("./cityRoutes");

router.use("/users", User);
router.use("/categories", Category);
router.use("/products", Product);
router.use("/orders", Order);
router.use("/order-items", OrderItem);
router.use("/payments", Payment);
router.use("/upload", UploadImage);
router.use("/shipping", Shipping);
router.use("/provinces", Province);
router.use("/cities", City);

module.exports = router;
