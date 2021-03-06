import mongoose from "mongoose";

const { Schema } = mongoose;

const SubmissionSchema = new Schema(
  {
    type: String,
    description: String,
  },
  { versionKey: false },
);

export const Submission = mongoose.model("Submission", SubmissionSchema);
