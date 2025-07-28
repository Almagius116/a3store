const express = require("express");
const router = express.Router();
const provinceController = require("../controllers/provinceController");

router.get("/", provinceController.getAllProvince);
// router.post("/", categoryController.createCategory);
// router.get("/:id", categoryController.getCategoryById);
// router.patch("/:id", categoryController.updateCategory);
// router.delete("/:id", categoryController.deleteCategory);

module.exports = router;
