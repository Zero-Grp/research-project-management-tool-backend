import express from "express";
import {
  saveTopic,
  getTopic,
  getTopicsByGroup,
  updateTopic,
  deleteTopic,
} from "../controllers/index.js";

const topicRouter = express.Router();

topicRouter.post("/", saveTopic);
topicRouter.get("/:topic_id", getTopic);
topicRouter.get("/", getTopicsByGroup);
topicRouter.put("/:topic_id", updateTopic);
topicRouter.delete("/:topic_id", deleteTopic);

export default topicRouter;
