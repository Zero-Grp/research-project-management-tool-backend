import {
  saveSubmission,
  getSubmission,
  getSubmissions,
  updateSubmission,
  deleteSubmission,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const saveSubmission1 = async (data) => {
  const { type, description, marksheet } = data;
  try {
    await saveSubmission({ type, description, marksheet });
    return Promise.resolve("Successfully saved Submission.");
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getSubmission1 = async (id) => {
  try {
    let submission = await getSubmission(id);
    return Promise.resolve(submission);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getSubmissions1 = async () => {
  try {
    let submissions = await getSubmissions();
    return Promise.resolve(submissions);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updateSubmission1 = async (id, data) => {
  try {
    let submission = await updateSubmission(id, data);
    return Promise.resolve(submission);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const deleteSubmission1 = async (id) => {
  try {
    let submission = await deleteSubmission(id);
    return Promise.resolve(submission);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
