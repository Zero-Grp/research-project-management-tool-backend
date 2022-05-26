import {
  saveSubmission,
  getSubmission,
  getSubmissions,
  updateSubmission,
  deleteSubmission,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const saveSubmissionService = async (data) => {
  const { type, description } = data;
  try {
    await saveSubmission({ type, description });
    return Promise.resolve("Successfully saved Submission.");
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getSubmissionService = async (id) => {
  try {
    const submission = await getSubmission(id);
    return Promise.resolve(submission);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getSubmissionsService = async () => {
  try {
    const submissions = await getSubmissions();
    return Promise.resolve(submissions);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updateSubmissionService = async (id, data) => {
  try {
    const submission = await updateSubmission(id, data);
    return Promise.resolve(submission);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const deleteSubmissionService = async (id) => {
  try {
    const submission = await deleteSubmission(id);
    return Promise.resolve(submission);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
