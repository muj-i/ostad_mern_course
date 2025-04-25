import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import apiRoutes from "./api.js";

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api", apiRoutes);

const PORT = process.env.PORT || 5800;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));