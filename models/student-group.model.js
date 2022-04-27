import mongoose from "mongoose";

const { Schema } = mongoose;

const StudentGroupSchema = new Schema(
  {
    groupID: Number,
    groupName: String,
    topic: String
  },
  { versionKey: false },
);

export const StudentGroup = mongoose.model("groups", StudentGroupSchema);