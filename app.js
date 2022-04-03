import "dotenv/config";
import express from "express";
import cors from "cors";
import { connect } from "./utils/dbConnect";

const app = express();
app.use(cors());
app.use(express.json());

connect();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
