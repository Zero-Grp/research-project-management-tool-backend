import {
  save,
  login,
  userByID,
  deleteByID,
  getUsersByType,
  updateUserByID,
} from "../services/index.js";
import Success from "../utils/success.js";

export const saveUser = async (req, res) => {
  try {
    const user = await save(req.body);
    res.json(Success(user, "Successfully registered."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const loginUser = async (req, res) => {
  try {
    const user = await login(req.body);
    res.json(Success(user, "Successfully logged in."));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getUserbyId = async (req, res) => {
  try {
    const userd = await userByID(req.body);
    res.json(Success(userd, "Data Fetched Successfully"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const deleteUserById = async (req, res) => {
  try {
    const userd = await deleteByID(req.body);
    res.json(Success(userd, "User Deleted Succesfully"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const getUsersByTypes = async (req, res) => {
  try {
    const userd = await getUsersByType(req.body);
    res.json(Success(userd, "Users Fetched Succesfully"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};

export const updateUserDataByID = async (req, res) => {
  try {
    const userd = await updateUserByID(req.body);
    res.json(Success(userd, "Users Updated Succesfully"));
  } catch (err) {
    res.status(err.status).json(err.message);
  }
};
