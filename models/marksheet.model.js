import mongoose from "mongoose";

const { Schema } = mongoose;

const MarkSheetSchema = new Schema(
  {
    criteria: String,
    distribution: String,
  },
  { versionKey: false },
);

export const MarkSheet = mongoose.model("MarkSheet", MarkSheetSchema);
