import { Schema, model } from "mongoose";

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
