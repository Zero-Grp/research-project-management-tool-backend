import { Stage } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveStage = (data) =>
  Stage.create(data)
    .then((stage) => {
      return Promise.resolve(stage);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getStage = (id) => {
  return Stage.findById(id)
    .then((stage) => {
      return Promise.resolve(stage);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
};

export const getStages = () => {
  return Stage.find()
    .then((stages) => {
      return Promise.resolve(stages);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
};

export const updateStage = (id, data) => {
  return Stage.findByIdAndUpdate(id, data, { new: true })
    .then((stage) => {
      return Promise.resolve(stage);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
};

export const deleteStage = (id) => {
  return Stage.findByIdAndDelete(id)
    .then((stage) => {
      return Promise.resolve(stage);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
};
