import {
  saveGroup,
  getAllGroups,
  getGroup,
  updateGroup,
  deleteGroup,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const saveStudentGroup = async (data) => {
  try {
    const group = await saveGroup(data);
    return Promise.resolve(group);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getAllStudentGroups = async () => {
  try {
    const groups = await getAllGroups();
    if (groups.length === 0) {
      throw new AppError("No group found.", 400);
    }
    return Promise.resolve(groups);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getStudentGroup = async (data) => {
  const groupID = data;
  try {
    const exGroup = await getGroup(groupID);
    if (!exGroup) {
      throw new AppError("Group does not exist.", 400);
    }
    return Promise.resolve(exGroup);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updateStudentGroup = async (data) => {
  const { groupID } = data;
  try {
    const modifiedGroup = await updateGroup(groupID, data);
    return Promise.resolve(modifiedGroup);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const deleteStudentGroup = async (data) => {
  const groupID = data;
  try {
    const result = await deleteGroup(groupID);
    return Promise.resolve(result);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
