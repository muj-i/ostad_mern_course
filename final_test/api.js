import express from "express";
import {
  getAllNews,
  getNewsById,
  createNews,
  deleteNews,
  updateNews,
} from "./NewsController.js";

const router = express.Router();

router.post("/news", createNews);
router.get("/news", getAllNews);
router.get("/news/:id", getNewsById);
router.put("/news/:id", updateNews);
router.delete("/news/:id", deleteNews);

export default router;
