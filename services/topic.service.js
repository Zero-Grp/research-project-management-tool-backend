import {
  saveTopic,
  getTopic,
  getTopicsByGroup,
  updateTopic,
  deleteTopic,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const saveTopicService = async (data) => {
  try {
    const topic = await saveTopic(data);
    return Promise.resolve(topic);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getTopicService = async (topicId) => {
  try {
    const topic = await getTopic(topicId);
    return Promise.resolve(topic);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getTopicsByGroupService = async (groupId) => {
  try {
    const topics = await getTopicsByGroup(groupId);
    return Promise.resolve(topics);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updateTopicService = async (topicId, data) => {
  try {
    const topic = await updateTopic(topicId, data);
    return Promise.resolve(topic);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const deleteTopicService = async (topicId) => {
  try {
    const result = await deleteTopic(topicId);
    return Promise.resolve(result);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
