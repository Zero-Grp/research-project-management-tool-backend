import express from "express";
import userRouter from "./user.route.js";
import submissionRouter from "./submission.route.js";
import marksheetRouter from "./marksheet.route.js";
import stageRouter from "./stage.route.js";

const apiRouter = express.Router();

apiRouter.use("/user", userRouter);
apiRouter.use("/submission", submissionRouter);
apiRouter.use("/marksheet", marksheetRouter);
apiRouter.use("/stage", stageRouter);

export default apiRouter;
