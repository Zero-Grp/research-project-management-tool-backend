import {
  saveUser,
  loginUser,
  getUserbyId,
  deleteUserById,
  getUsersByTypes,
  updateUserDataByID,
} from "./user.controller.js";
import {
  saveSubmission,
  getSubmission,
  getSubmissions,
  updateSubmission,
  deleteSubmission,
} from "./submission.controller.js";
import {
  saveMarkSheet,
  getMarkSheet,
  getMarkSheets,
  updateMarkSheet,
  deleteMarkSheet,
} from "./marksheet.controller.js";
import {
  saveTopic,
  getTopic,
  getTopicsByGroup,
  updateTopic,
  deleteTopic,
} from "./topic.controller.js";
import {
  saveChat,
  getChat,
  getChatsByGroup,
  updateChat,
  deleteChat,
} from "./chat.controller.js";

export {
  //  user
  saveUser,
  loginUser,
  getUserbyId,
  deleteUserById,
  getUsersByTypes,
  updateUserDataByID,
  //  submission
  saveSubmission,
  getSubmission,
  getSubmissions,
  updateSubmission,
  deleteSubmission,
  //  marksheet
  saveMarkSheet,
  getMarkSheet,
  getMarkSheets,
  updateMarkSheet,
  deleteMarkSheet,
  //  topic
  saveTopic,
  getTopic,
  getTopicsByGroup,
  updateTopic,
  deleteTopic,
  // chat
  saveChat,
  getChat,
  getChatsByGroup,
  updateChat,
  deleteChat,
};
