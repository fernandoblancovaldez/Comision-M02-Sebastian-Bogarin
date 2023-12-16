import { Schema, model } from "mongoose";

const CommentSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User", //se establece la relacion con el modelo User para indicar quien es su autor
    required: true,
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post", //aca se establece la relacion para indicar a qué post pertenece el comentario
    required: true,
  },
  description: {
    type: String,
    require: true,
  },
});

export const CommentModel = model("Comment", CommentSchema);
