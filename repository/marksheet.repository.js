import { MarkSheet } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveMarkSheet = (data) =>
  MarkSheet.create(data)
    .then((marksheet) => {
      return Promise.resolve(marksheet);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getMarkSheet = (id) =>
  MarkSheet.findById(id)
    .then((marksheet) => {
      return Promise.resolve(marksheet);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getMarkSheets = () =>
  MarkSheet.find()
    .then((marksheets) => {
      return Promise.resolve(marksheets);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const updateMarkSheet = (id, data) =>
  MarkSheet.findByIdAndUpdate(id, data, { new: true })
    .then((marksheet) => {
      return Promise.resolve(marksheet);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const deleteMarkSheet = (id) =>
  MarkSheet.findByIdAndDelete(id)
    .then((marksheet) => {
      return Promise.resolve(marksheet);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
