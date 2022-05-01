import {
  save,
  login,
  userByID,
  deleteByID,
  getUsersByType,
  updateUserByID,
} from "./user.service.js";
import {
  saveSubmissionService,
  getSubmissionService,
  getSubmissionsService,
  updateSubmissionService,
  deleteSubmissionService,
} from "./submission.service.js";
import {
  saveMarkSheetService,
  getMarkSheetService,
  getMarkSheetsService,
  updateMarkSheetService,
  deleteMarkSheetService,
} from "./marksheet.service.js";
import {
  saveTopicService,
  getTopicService,
  getTopicsByGroupService,
  updateTopicService,
  deleteTopicService,
} from "./topic.service.js";
import {
  saveChatService,
  getChatService,
  getChatsByGroupService,
  updateChatService,
  deleteChatService,
} from "./chat.service.js";

export {
  //  user
  save,
  login,
  userByID,
  deleteByID,
  getUsersByType,
  updateUserByID,
  //  submission
  saveSubmissionService,
  getSubmissionService,
  getSubmissionsService,
  updateSubmissionService,
  deleteSubmissionService,
  //  marksheet
  saveMarkSheetService,
  getMarkSheetService,
  getMarkSheetsService,
  updateMarkSheetService,
  deleteMarkSheetService,
  //  topic
  saveTopicService,
  getTopicService,
  getTopicsByGroupService,
  updateTopicService,
  deleteTopicService,
  // chat
  saveChatService,
  getChatService,
  getChatsByGroupService,
  updateChatService,
  deleteChatService,
};
