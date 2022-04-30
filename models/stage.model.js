import mongoose from "mongoose";

const { Schema } = mongoose;

const StageSchema = new Schema(
  {
    submissionType: {
      type: Schema.Types.ObjectId,
      ref: "Submission",
    },
    status: Boolean,
    reviewer: {
      type: [Schema.Types.ObjectId],
      ref: "User",
    },
    marksheet: {
      type: Schema.Types.ObjectId,
      ref: "Marksheet",
    },
    result: String,
    document: String,
    dueDate: Date,
    group: {
      type: Schema.Types.ObjectId,
      ref: "Group",
    },
  },
  { timestamps: true },
  { versionKey: false },
);

export const Stage = mongoose.model("Stage", StageSchema);
