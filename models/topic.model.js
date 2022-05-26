import mongoose from "mongoose";

const { Schema } = mongoose;

const TopicSchema = new Schema(
  {
    title: String,
    description: String,
    status: String,
    group_id: {
      type: Schema.Types.ObjectId,
      ref: "StudentGroup",
    },
  },
  {
    versionKey: false,
  },
);

export const Topic = mongoose.model("Topic", TopicSchema);
