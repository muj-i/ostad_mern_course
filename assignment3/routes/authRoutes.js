import express from "express";
import { generateToken, postResponse } from "../app/controllers/authController.js";

const router = express.Router();

router.get("/token", generateToken);
router.post("/post-body", postResponse);

export default router;