import {
  saveChat,
  getChat,
  getChatsByGroup,
  updateChat,
  deleteChat,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const saveChatService = async (data) => {
  try {
    const chat = await saveChat(data);
    return Promise.resolve(chat);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getChatService = async (chatId) => {
  try {
    const chat = await getChat(chatId);
    return Promise.resolve(chat);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getChatsByGroupService = async (groupId) => {
  try {
    const chats = await getChatsByGroup(groupId);
    return Promise.resolve(chats);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updateChatService = async (chatId, data) => {
  try {
    const chat = await updateChat(chatId, data);
    return Promise.resolve(chat);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const deleteChatService = async (chatId) => {
  try {
    const result = await deleteChat(chatId);
    return Promise.resolve(result);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
