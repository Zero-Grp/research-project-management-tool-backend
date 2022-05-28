import { saveUser, loginUser, getUser } from "./user.repository.js";
import {
  saveSubmission,
  getSubmission,
  getSubmissions,
  updateSubmission,
  deleteSubmission,
} from "./submission.repository.js";
import {
  saveMarkSheet,
  getMarkSheet,
  getMarkSheets,
  updateMarkSheet,
  deleteMarkSheet,
} from "./marksheet.repository.js";
import {
  saveStage,
  getStage,
  getStages,
  updateStage,
  deleteStage,
} from "./stage.repository.js";
import {
  saveTopic,
  getTopic,
  getTopicsByGroup,
  updateTopic,
  deleteTopic,
} from "./topic.repository.js";
import {
  saveChat,
  getChat,
  getChatsByGroup,
  updateChat,
  deleteChat,
} from "./chat.repository.js";

export {
  //  user
  saveUser,
  loginUser,
  getUser,
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
