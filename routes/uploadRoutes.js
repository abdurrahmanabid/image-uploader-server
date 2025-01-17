const express = require("express");
const { uploadImage, deleteImage } = require("../controller/uploadController");
const upload = require("../helper/uploadFile");
const router = express.Router();

// POST route to upload an image
router.post("/image", upload.single("image"), uploadImage);

// DELETE route to delete an image
router.delete("/image/:filename", deleteImage);

module.exports = router;
