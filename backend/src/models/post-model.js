import { Schema, model } from "mongoose";

// se crea primero el esquema de datos para luego crear el modelo usando el metodo creador que nos ofrece mongoose
const PostSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    author: {
      type: Schema.Types.ObjectId, //se indica que el tipo de dato va a ser un ojectId
      ref: "User", // se establece la referencia para relacionar el documento al modelo User
      required: true,
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment", //aca tm se establece que éste arreglo va a estar relacionado al modelo Comment
      },
    ],
    imageURL: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const PostModel = model("Post", PostSchema);
