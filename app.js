import "dotenv/config";
import express from "express";
import cors from "cors";
import { connect } from "./utils/dbConnect.js";

import apiRouter from "./routes/index.js";

const app = express();
app.use(cors());
app.use(express.json());

connect();

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on port ${PORT}`);
});

export default app;
