const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Mock API for product data
app.get("/api/products", (req, res) => {
  res.json([
    { id: 1, name: "Wireless Headphones", price: 59.99, image: "headphones.jpg" },
    { id: 2, name: "Smartphone", price: 699.99, image: "smartphone.jpg" },
    { id: 3, name: "Gaming Mouse", price: 39.99, image: "mouse.jpg" },
  ]);
});

// Start the server
app.listen(PORT, () => {
  console.log(Server running on http://localhost:${PORT});
});
