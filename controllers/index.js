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
  saveGroup,
  getAllGroups,
  getGroup,
  updateGroup,
  deleteGroup
} from "./student-group.controller.js";


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
  // student-group
  saveGroup,
  getAllGroups,
  getGroup,
  updateGroup,
  deleteGroup
};
