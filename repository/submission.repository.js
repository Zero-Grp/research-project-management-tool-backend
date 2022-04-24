import { Submission } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveSubmission = (data) =>
  Submission.create(data)
    .then((submission) => {
      return Promise.resolve(submission);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getSubmission = (id) =>
  Submission.findById(id)
    .then((submission) => {
      if (!submission) {
        throw new AppError("Submission not found.", 404);
      }
      return Promise.resolve(submission);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getSubmissions = () =>
  Submission.find()
    .then((submissions) => {
      return Promise.resolve(submissions);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const updateSubmission = (id, data) =>
  Submission.findByIdAndUpdate(id, data, { new: true })
    .then((submission) => {
      if (!submission) {
        throw new AppError("Submission not found.", 404);
      }
      return Promise.resolve(submission);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const deleteSubmission = (id) =>
  Submission.findByIdAndDelete(id)
    .then((submission) => {
      if (!submission) {
        throw new AppError("Submission not found.", 404);
      }
      return Promise.resolve(submission);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
