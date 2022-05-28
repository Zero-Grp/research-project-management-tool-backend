import mongoose from "mongoose";

const { Schema } = mongoose;

const ChatSchema = new Schema(
  {
    message: String,
    user_id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    group_id: {
      type: Schema.Types.ObjectId,
      ref: "StudentGroup",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

ChatSchema.index({ created_at: 1 });
export const Chat = mongoose.model("Chat", ChatSchema);
