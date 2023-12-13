import { UserModel } from "../models/user-model.js";
import * as bcrypt from "bcrypt"; //nos servirá para encriptar el password
import { createJWT } from "../utils/jwt.js"; //nos servirá para proteger el acceso a los usuarios

//controlador para registro de usuario
export const ctrlRegisterUser = async (req, res) => {
  try {
    const newUser = new UserModel(req.body); //se usa el método nativo de mongo

    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Couldn't create user" });
  }
};
//controlador para login de usuario
export const ctrlLoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });

    //se valida que el password enviado por body coincida con el del usuario encontrado por email
    if (user.password !== password)
      return res.status(404).json({ error: "Invalid credentials" });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Couldn't login user" });
  }
};

//controlador para actualizar 1 usuario
export const ctrlUpdateUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await UserModel.findOne({ _id: userId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.set(req.body);

    await user.save();

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.sendStatus(500).json({ message: "Couldn't update user" });
  }
};

//controlador para eliminar 1 usuario
export const ctrlDeleteUser = async (req, res) => {
  const { userId } = req.params;

  try {
    await UserModel.findOneAndDelete({ _id: userId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500).json({ message: "Couldn't delete user" });
  }
};
