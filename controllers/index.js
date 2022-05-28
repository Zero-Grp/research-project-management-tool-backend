import { saveUser, loginUser } from "./user.controller.js";
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
  saveStage,
  getStage,
  getStages,
  updateStage,
  deleteStage,
} from "./stage.controller.js";
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
  //  stage
  saveStage,
  getStage,
  getStages,
  updateStage,
  deleteStage,
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
