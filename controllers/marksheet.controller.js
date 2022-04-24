import {
  saveMarkSheetService,
  getMarkSheetService,
  getMarkSheetsService,
  updateMarkSheetService,
  deleteMarkSheetService,
} from "../services/index.js";
import Success from "../utils/success.js";

export const saveMarkSheet = async (req, res) => {
  try {
    const submission = await saveMarkSheetService(req.body);
    res.json(Success(submission, "Successfully created MarkSheet."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getMarkSheet = async (req, res) => {
  try {
    const marksheet = await getMarkSheetService(req.params.id);
    res.json(Success(marksheet, "Successfully fetched MarkSheet."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getMarkSheets = async (req, res) => {
  try {
    const marksheets = await getMarkSheetsService();
    res.json(Success(marksheets, "Successfully fetched MarkSheets."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updateMarkSheet = async (req, res) => {
  try {
    const marksheet = await updateMarkSheetService(req.params.id, req.body);
    res.json(Success(marksheet, "Successfully updated MarkSheet."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const deleteMarkSheet = async (req, res) => {
  try {
    const marksheet = await deleteMarkSheetService(req.params.id);
    res.json(Success(marksheet, "Successfully deleted MarkSheet."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
