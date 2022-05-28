import { Chat } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveChat = (data) =>
  Chat.create(data)
    .then((chat) => {
      return Promise.resolve(chat);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getChat = (chatId) =>
  Chat.findById(chatId)
    .then((chat) => {
      return Promise.resolve(chat);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getChatsByGroup = (groupId) =>
  Chat.find({ group_id: groupId })
    .then((chats) => {
      return Promise.resolve(chats);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const updateChat = (chatId, data) =>
  Chat.findByIdAndUpdate(chatId, data, { new: true })
    .then((chat) => {
      return Promise.resolve(chat);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const deleteChat = (chatId) =>
  Chat.findByIdAndDelete(chatId)
    .then((chat) => {
      return Promise.resolve(chat._id);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
