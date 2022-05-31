import {
  save,
  login,
  userByID,
  deleteByID,
  getUsersByType,
  updateUserByID,
  getUsersService,
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
  saveStageService,
  getStageService,
  getStagesService,
  updateStageService,
  deleteStageService,
} from "./stage.service.js";
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
import {
  saveStudentGroup,
  getAllStudentGroups,
  getStudentGroup,
  updateStudentGroup,
  deleteStudentGroup,
} from "./student-group.service.js";

export {
  //  user
  save,
  login,
  userByID,
  deleteByID,
  getUsersByType,
  updateUserByID,
  getUsersService,
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
  // student-group
  saveStudentGroup,
  getAllStudentGroups,
  getStudentGroup,
  updateStudentGroup,
  deleteStudentGroup,
  //  stage
  saveStageService,
  getStageService,
  getStagesService,
  updateStageService,
  deleteStageService,
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
