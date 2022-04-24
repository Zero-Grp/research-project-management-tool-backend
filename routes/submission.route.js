import express from "express";
import {
  saveSubmission,
  getSubmission,
  getSubmissions,
  updateSubmission,
  deleteSubmission,
} from "../controllers/index.js";

const submissionRouter = express.Router();

submissionRouter.post("/", saveSubmission);
submissionRouter.get("/:id", getSubmission);
submissionRouter.get("/", getSubmissions);
submissionRouter.put("/:id", updateSubmission);
submissionRouter.delete("/:id", deleteSubmission);

export default submissionRouter;
