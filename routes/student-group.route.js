import express from "express";
import {
  saveGroup,
  getAllGroups,
  getGroup,
  updateGroup,
  deleteGroup,
} from "../controllers/index.js";

const studentGroupRouter = express.Router();

studentGroupRouter.post("/", saveGroup);
studentGroupRouter.get("/", getAllGroups);
studentGroupRouter.get("/:id", getGroup);
studentGroupRouter.put("/:id", updateGroup);
studentGroupRouter.delete("/:id", deleteGroup);

export default studentGroupRouter;
