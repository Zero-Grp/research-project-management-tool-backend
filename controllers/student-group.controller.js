import {
  saveStudentGroup,
  getAllStudentGroups,
  getStudentGroup,
  updateStudentGroup,
  deleteStudentGroup,
} from "../services/index.js";
import Success from "../utils/success.js";

export const saveGroup = async (req, res) => {
  try {
    const group = await saveStudentGroup(req.body);
    res.json(Success(group, "Group added successfully."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getAllGroups = async (req, res) => {
  try {
    const groups = await getAllStudentGroups();
    res.json(Success(groups));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getGroup = async (req, res) => {
  const id = Number(req.params.id);
  try {
    const group = await getStudentGroup(id);
    res.json(Success(group));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updateGroup = async (req, res) => {
  try {
    const group = await updateStudentGroup(req.body);
    res.json(Success(group, "Group updated successfully."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const deleteGroup = async (req, res) => {
  const id = Number(req.params.id);
  try {
    const result = await deleteStudentGroup(id);
    res.json(Success(result, "Group deleted successfully."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
