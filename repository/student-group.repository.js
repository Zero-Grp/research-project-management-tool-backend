import { StudentGroup } from "../models/index.js";
import AppError from "../utils/appError.js";

export const saveGroup = (data) =>
  StudentGroup.create(data)
    .then((group) => {
      return Promise.resolve(group);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

  export const getAllGroups = () =>
    StudentGroup.find()
    .then((groups) => {console.log(groups)
      return Promise.resolve(groups);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

  export const getGroup = (groupID) =>
    StudentGroup.findOne({groupID})
    .then((group) => {console.log(group)
      return Promise.resolve(group);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });

  export const updateGroup = (id, data) =>
    StudentGroup.findOneAndUpdate({groupID: id}, data)
    .then((group) => {console.log(group)
      return Promise.resolve(group);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });
  
  export const deleteGroup = (groupID) =>
    StudentGroup.deleteOne({groupID})
    .then((result) => {console.log(result)
      return Promise.resolve(result);
    })
    .catch(() => {
      throw new AppError("Internal server error.", 500);
    });