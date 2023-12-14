import { Schema, model } from "mongoose";

// se crea primero el esquema de datos para luego crear el modelo usando el metodo creador que nos ofrece mongoose 
const UserSchema = new Schema({
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  avatarURL: {
    type: String,
    require: true,
  },
});

export const UserModel = model("User", UserSchema);
