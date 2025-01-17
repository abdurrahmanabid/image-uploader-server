require("dotenv").config();
const express = require("express");
const dbconnection = require("./helper/dbconnection");
const path = require("path"); // To handle paths
const app = express();
const PORT = process.env.PORT;
dbconnection();

app.use("/src/image", express.static(path.join(__dirname, "src", "image")));

// Routes
const userRoutes = require("./routes/userRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

// Middleware
app.use(express.json());

// Routes
app.use("/", userRoutes);
app.use("/upload", uploadRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
