import express from "express";
import {
  saveStage,
  getStage,
  getStages,
  updateStage,
  deleteStage,
} from "../controllers/index.js";

const stageRouter = express.Router();

stageRouter.post("/", saveStage);
stageRouter.get("/:id", getStage);
stageRouter.get("/", getStages);
stageRouter.put("/:id", updateStage);
stageRouter.delete("/:id", deleteStage);

export default stageRouter;
