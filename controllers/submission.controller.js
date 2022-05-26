import {
  saveSubmissionService,
  getSubmissionService,
  getSubmissionsService,
  updateSubmissionService,
  deleteSubmissionService,
} from "../services/index.js";
import Success from "../utils/success.js";

export const saveSubmission = async (req, res) => {
  try {
    const submission = await saveSubmissionService(req.body);
    res.json(Success(submission, "Successfully created Submission."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getSubmission = async (req, res) => {
  try {
    const submission = await getSubmissionService(req.params.id);
    res.json(Success(submission, "Successfully fetched Submission."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getSubmissions = async (req, res) => {
  try {
    const submissions = await getSubmissionsService();
    res.json(Success(submissions, "Successfully fetched Submissions."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updateSubmission = async (req, res) => {
  try {
    const submission = await updateSubmissionService(req.params.id, req.body);
    res.json(Success(submission, "Successfully updated Submission."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const deleteSubmission = async (req, res) => {
  try {
    const submission = await deleteSubmissionService(req.params.id);
    res.json(Success(submission, "Successfully deleted Submission."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
