import express from "express";
import bodyParser from "body-parser";
import indexRoutes from "./routes/indexRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(bodyParser.json());
app.use("/", indexRoutes);
app.use("/auth", authRoutes);

export default app;