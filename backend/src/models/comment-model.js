import { Schema, model } from "mongoose";

const CommentSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
  description: {
    type: String,
    require: true,
  },
});

export const CommentModel = model("Comment", CommentSchema);
