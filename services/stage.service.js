import {
  saveStage,
  getStage,
  getStages,
  updateStage,
  deleteStage,
} from "../repository/index.js";
import AppError from "../utils/appError.js";

export const saveStageService = async (data) => {
  try {
    await saveStage(data);
    return Promise.resolve("Successfully saved stage.");
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getStageService = async (id) => {
  try {
    const stage = await getStage(id);
    return Promise.resolve(stage);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const getStagesService = async () => {
  try {
    const stages = await getStages();
    return Promise.resolve(stages);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const updateStageService = async (id, data) => {
  try {
    const stage = await updateStage(id, data);
    return Promise.resolve(stage);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};

export const deleteStageService = async (id) => {
  try {
    const stage = await deleteStage(id);
    return Promise.resolve(stage);
  } catch (err) {
    throw new AppError(err.message, err.status);
  }
};
