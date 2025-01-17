const path = require("path");
const fs = require("fs");

const uploadImage = (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    res.status(200).json({
      message: "Image uploaded successfully",
      filePath: `${file.filename}`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error uploading file" });
  }
};

const deleteImage = (req, res) => {
  try {
    const { filename } = req.params;
    const filePath = path.join(__dirname, "../src/image", filename);

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: "File not found" });
    }

    // Delete the file
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Error deleting file" });
      }

      res.status(200).json({ message: "Image deleted successfully" });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting file" });
  }
};

module.exports = { uploadImage, deleteImage };
