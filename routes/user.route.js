import express from "express";
import {
  saveUser,
  loginUser,
  getUserbyId,
  deleteUserById,
  getUsersByTypes,
  updateUserDataByID,
  getAll,
  getOneByID,
} from "../controllers/index.js";

const userRouter = express.Router();

userRouter.post("/", saveUser);
userRouter.post("/login", loginUser);
userRouter.post("/getUser", getUserbyId);
userRouter.delete("/deleteUser", deleteUserById);
userRouter.post("/getUsers", getUsersByTypes);
userRouter.patch("/update", updateUserDataByID);
userRouter.get("/", getAll);
userRouter.get("/:id", getOneByID);

export default userRouter;
