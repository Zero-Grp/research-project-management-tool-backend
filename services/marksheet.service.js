import {
  saveMarkSheet,
  getMarkSheet,
  getMarkSheets,
  updateMarkSheet,
  deleteMarkSheet,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const saveMarkSheetService = async (data) => {
  const { criteria, distribution } = data;
  try {
    await saveMarkSheet({ criteria, distribution });
    return Promise.resolve("Successfully saved MarkSheet.");
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getMarkSheetService = async (id) => {
  try {
    const marksheet = await getMarkSheet(id);
    return Promise.resolve(marksheet);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getMarkSheetsService = async () => {
  try {
    const marksheets = await getMarkSheets();
    return Promise.resolve(marksheets);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updateMarkSheetService = async (id, data) => {
  try {
    const marksheet = await updateMarkSheet(id, data);
    return Promise.resolve(marksheet);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const deleteMarkSheetService = async (id) => {
  try {
    const marksheet = await deleteMarkSheet(id);
    return Promise.resolve(marksheet);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
