const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./routes/pdf");

const app = express();
const PORT = 4244;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/api", router); // Prefix all routes with /api

// Start Server
app.listen(PORT, () => {
  console.log("The server is running at port", PORT);
});
