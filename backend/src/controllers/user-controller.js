import { UserModel } from "../models/user-model.js";
import * as bcrypt from "bcrypt"; //nos servirá para encriptar el password
import { createJWT } from "../utils/jwt.js"; //nos servirá para proteger el acceso a los usuarios

//controlador para registro de usuario
export const ctrlRegisterUser = async (req, res) => {
  try {
    const data = req.body; //se extrae la data para crear el user
    const { email, password } = req.body; //se extrae el password para encryptarlo

    const hashedPassword = await bcrypt.hash(password, 10); //se encrypta el password
    const newData = { ...data, password: hashedPassword }; //se crea nuevo modelo con la data y el password encryptado

    const newUser = new UserModel(newData); //se usa el método nativo de mongo
    await newUser.save();

    const token = await createJWT({ userId: newUser._id }); //se crea token para luego enviarlo por json como respuesta
    const user = await UserModel.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });

    res.status(201).json({ token, user });
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
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = await createJWT({ userId: user._id });

    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ error: "Couldn't login user" });
  }
};

//controlador para actualizar 1 usuario
export const ctrlUpdateUser = async (req, res) => {
  const { userId } = req.params;
  let newData = req.body; //se extrae la nueva data

  try {
    const user = await UserModel.findOne({ _id: userId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (req.body.password) {
      const { password } = req.body; //se extrae el password para encryptarlo

      const hashedPassword = await bcrypt.hash(password, 10); //se encrypta el password
      newData = { ...req.body, password: hashedPassword }; //se actualiza la data con el password encryptado
    }

    user.set(newData);

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
    const user = await UserModel.findOneAndDelete({ _id: userId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500).json({ message: "Couldn't delete user" });
  }
};
