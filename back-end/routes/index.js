const router = require("express").Router();

const User = require("./userRoutes");
const Category = require("./categoryRoutes");
const Product = require("./productRoutes");
const Order = require("./orderRoutes");
const OrderItem = require("./orderItemRoutes");
const UploadImage = require("./uploadImageRoutes");

router.use("/users", User);
router.use("/categories", Category);
router.use("/products", Product);
router.use("/orders", Order);
router.use("/order-items", OrderItem);
router.use("/upload", UploadImage);

module.exports = router;
