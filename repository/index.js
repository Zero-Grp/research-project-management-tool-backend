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
  saveGroup,
  getAllGroups,
  getGroup,
  updateGroup,
  deleteGroup
} from "./student-group.repository.js";


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
  // student-group
  saveGroup,
  getAllGroups,
  getGroup,
  updateGroup,
  deleteGroup
};
