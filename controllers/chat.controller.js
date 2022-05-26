import {
  saveChatService,
  getChatService,
  getChatsByGroupService,
  updateChatService,
  deleteChatService,
} from "../services/index.js";
import Success from "../utils/success.js";

export const saveChat = async (req, res) => {
  try {
    const chat = await saveChatService(req.body);
    res.json(Success(chat, "Message creation success."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getChatsByGroup = async (req, res, next) => {
  if (!req.query.group_id) {
    next();
  } else {
    try {
      const chats = await getChatsByGroupService(req.query.group_id);
      res.json(Success(chats, "Messages fetch by group success."));
    } catch (err) {
      res.status(err.status).json(err.message);
    }
  }
};

export const getChat = async (req, res) => {
  try {
    const chat = await getChatService(req.params.chat_id);
    res.json(Success(chat, "Message fetch success."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updateChat = async (req, res) => {
  try {
    const chat = await updateChatService(req.params.chat_id, req.body);
    res.json(Success(chat, "Message update success."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const deleteChat = async (req, res) => {
  try {
    const result = await deleteChatService(req.params.chat_id);
    res.json(Success(result, "Message delete success."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
