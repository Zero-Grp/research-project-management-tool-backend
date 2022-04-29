import { save, login } from "./user.service.js";
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

export {
  //  user
  save,
  login,
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
  //  stage
  saveStageService,
  getStageService,
  getStagesService,
  updateStageService,
  deleteStageService,
};
