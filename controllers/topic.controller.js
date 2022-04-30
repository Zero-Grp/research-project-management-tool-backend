import {
  saveTopicService,
  getTopicService,
  getTopicsByGroupService,
  updateTopicService,
  deleteTopicService,
} from "../services/index.js";
import Success from "../utils/success.js";

export const saveTopic = async (req, res) => {
  try {
    const topic = await saveTopicService(req.body);
    res.json(Success(topic, "Topic creation success."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getTopicsByGroup = async (req, res, next) => {
  if (!req.query.group_id) {
    next();
  } else {
    try {
      const topics = await getTopicsByGroupService(req.query.group_id);
      res.json(Success(topics, "Topics fetch by group success."));
    } catch (err) {
      res.status(err.status).json(err.message);
    }
  }
};

export const getTopic = async (req, res) => {
  try {
    const topic = await getTopicService(req.params.topic_id);
    res.json(Success(topic, "Topic fetch success."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updateTopic = async (req, res) => {
  try {
    const topic = await updateTopicService(req.params.topic_id, req.body);
    res.json(Success(topic, "Topic update success."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const deleteTopic = async (req, res) => {
  try {
    const result = await deleteTopicService(req.params.topic_id);
    res.json(Success(result, "Topic delete success."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
