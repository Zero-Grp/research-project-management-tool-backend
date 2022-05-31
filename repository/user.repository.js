import { User } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveUser = (data) =>
  User.create(data)
    .then((user) => {
      return Promise.resolve(user);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const loginUser = (userName) =>
  User.findOne({ userName })
    .then((user) => {
      return Promise.resolve(user);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getUser = (data) =>
  User.findOne(data)
    .then((user) => {
      return Promise.resolve(user);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getUserByID = (userName) =>
  User.findOne({ userName })
    .then((user) => {
      return Promise.resolve(user);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const deleteUser = (userName) =>
  User.deleteOne({ userName })
    .then((user) => {
      return Promise.resolve(user);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const getUsers = (role) =>
  User.find({ role })
    .then((user) => {
      return Promise.resolve(user);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

export const updateUser = (userName, data) =>
  User.updateOne(userName, data)
    .then((datares) => {
      return Promise.resolve(datares);
    })
    .catch(() => {
      throw new AppError("Internal Server Error", 500);
    });

export const getAllUsers = () =>
  User.find()
    .then((users) => {
      return Promise.resolve(users);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
