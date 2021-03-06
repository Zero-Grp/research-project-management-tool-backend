import express from "express";
import userRouter from "./user.route.js";
import submissionRouter from "./submission.route.js";
import marksheetRouter from "./marksheet.route.js";
import studentGroupRouter from "./student-group.route.js";
import stageRouter from "./stage.route.js";
import topicRouter from "./topic.route.js";
import chatRouter from "./chat.route.js";

const apiRouter = express.Router();

apiRouter.use("/user", userRouter);
apiRouter.use("/submission", submissionRouter);
apiRouter.use("/marksheet", marksheetRouter);
apiRouter.use("/student-group", studentGroupRouter);
apiRouter.use("/stage", stageRouter);
apiRouter.use("/topic", topicRouter);
apiRouter.use("/chat", chatRouter);

export default apiRouter;
