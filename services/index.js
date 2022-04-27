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
  saveStudentGroup,
  getAllStudentGroups,
  getStudentGroup,
  updateStudentGroup,
  deleteStudentGroup
} from "./student-group.service.js";

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
  // student-group
  saveStudentGroup,
  getAllStudentGroups,
  getStudentGroup,
  updateStudentGroup,
  deleteStudentGroup
};
