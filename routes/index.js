import express from "express";
import userRouter from "./user.route.js";
import studentGroupRouter from "./student-group.route.js";

const apiRouter = express.Router();

apiRouter.use("/user", userRouter);
apiRouter.use("/student-group", studentGroupRouter);

export default apiRouter;
