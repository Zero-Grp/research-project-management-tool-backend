import {
  saveStageService,
  getStageService,
  getStagesService,
  updateStageService,
  deleteStageService,
} from "../services/index.js";
import Success from "../utils/success.js";

export const saveStage = async (req, res) => {
  try {
    const stage = await saveStageService(req.body);
    res.json(Success(stage, "Successfully created Stage."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getStage = async (req, res) => {
  try {
    const stage = await getStageService(req.params.id);
    res.json(Success(stage, "Successfully retrieved Stage."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getStages = async (req, res) => {
  try {
    const stages = await getStagesService();
    res.json(Success(stages, "Successfully retrieved Stages."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updateStage = async (req, res) => {
  try {
    const stage = await updateStageService(req.params.id, req.body);
    res.json(Success(stage, "Successfully updated Stage."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const deleteStage = async (req, res) => {
  try {
    const stage = await deleteStageService(req.params.id);
    res.json(Success(stage, "Successfully deleted Stage."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
