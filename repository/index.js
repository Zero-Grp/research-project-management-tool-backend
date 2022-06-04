import {
  saveUser,
  loginUser,
  getUser,
  getUserByID,
  deleteUser,
  getUsers,
  updateUser,
  getAllUsers,
  getOneUser,
} from "./user.repository.js";
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
  saveGroup,
  getAllGroups,
  getGroup,
  updateGroup,
  deleteGroup,
} from "./student-group.repository.js";
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
  getUserByID,
  deleteUser,
  getUsers,
  updateUser,
  getAllUsers,
  getOneUser,
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
  // student-group
  saveGroup,
  getAllGroups,
  getGroup,
  updateGroup,
  deleteGroup,
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
