import { Topic } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveTopic = (data) =>
  Topic.create(data)
    .then((topic) => {
      return Promise.resolve(topic);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getTopic = (topicId) =>
  Topic.findById(topicId)
    .then((topic) => {
      return Promise.resolve(topic);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getTopicsByGroup = (groupId) =>
  Topic.find({ group_id: groupId })
    .then((topics) => {
      return Promise.resolve(topics);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const updateTopic = (topicId, data) =>
  Topic.findByIdAndUpdate(topicId, data, { new: true })
    .then((topic) => {
      return Promise.resolve(topic);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const deleteTopic = (topicId) =>
  Topic.findByIdAndDelete(topicId)
    .then((topic) => {
      return Promise.resolve(topic._id);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
