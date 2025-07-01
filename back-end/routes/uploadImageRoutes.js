const express = require("express");
const upload = require("../middlewares/upload");
const uploadImage = require("../controllers/uploadImageController");

const router = express.Router();

router.post(
  "/upload-image",
  upload.single("image"),
  uploadImage.uploadGenericImage
);

module.exports = router;
