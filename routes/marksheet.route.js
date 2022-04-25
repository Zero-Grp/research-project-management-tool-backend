import express from "express";
import {
  saveMarkSheet,
  getMarkSheet,
  getMarkSheets,
  updateMarkSheet,
  deleteMarkSheet,
} from "../controllers/index.js";

const submissionRouter = express.Router();

submissionRouter.post("/", saveMarkSheet);
submissionRouter.get("/:id", getMarkSheet);
submissionRouter.get("/", getMarkSheets);
submissionRouter.put("/:id", updateMarkSheet);
submissionRouter.delete("/:id", deleteMarkSheet);

export default submissionRouter;
