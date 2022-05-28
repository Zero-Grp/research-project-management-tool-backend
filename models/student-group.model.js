import mongoose from "mongoose";

const { Schema } = mongoose;

const StudentGroupSchema = new Schema(
  {
    groupID: Number,
    groupName: String,
    topic: String,
    group_members: {
      type: [Schema.Types.ObjectId],
      ref: 'User'
    },
    panel_members: {
      type: [Schema.Types.ObjectId],
      ref: 'User'
    },
    supervisor: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    co_supervisor: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    supervisor_status: "String",
    co_supervisor_status: "String",
  },
  { versionKey: false },
);

export const StudentGroup = mongoose.model("groups", StudentGroupSchema);