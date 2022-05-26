import express from "express";
import {
  saveChat,
  getChat,
  getChatsByGroup,
  updateChat,
  deleteChat,
} from "../controllers/index.js";

const chatRouter = express.Router();

chatRouter.post("/", saveChat);
chatRouter.get("/:chat_id", getChat);
chatRouter.get("/", getChatsByGroup);
chatRouter.put("/:chat_id", updateChat);
chatRouter.delete("/:chat_id", deleteChat);

export default chatRouter;
