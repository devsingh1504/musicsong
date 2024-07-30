import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Item from "./models/item.js"; // Assuming you save your model in models/item.js

dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;
const URI = process.env.MONGODB_URI;
console.log(URI);

// MongoDB connection
mongoose
  .connect(URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.get("/api/songs", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
