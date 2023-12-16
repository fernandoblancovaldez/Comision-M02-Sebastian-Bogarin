import { param, body } from "express-validator";
import { applyValidations } from "../middlewares/apply-validations.js";
import { UserModel } from "../models/user-model.js";

//se crean validaciones con los métodos que nos facilita express-validator
export const registerUserValidations = [
  body("username")
    .notEmpty()
    .withMessage("El campo { username } no debe estar vacio.")
    .isString()
    .withMessage("El campo { username } debe ser un string.")
    // validación personalizada para verificar que el username no esté en uso.
    .custom(async (value) => {
      const user = await UserModel.findOne({ username: value });

      if (user) throw new Error("Username already in use");

      return true;
    }),
  body("password")
    .notEmpty()
    .withMessage("El campo { password } no debe estar vacio.")
    .isString()
    .withMessage("El campo { password } debe ser un string."),
  body("email")
    .notEmpty()
    .withMessage("El campo { email } no debe estar vacio.")
    .isEmail()
    .withMessage("El campo { email } debe ser un email válido.")
    // validación personalizada para verificar que el email no esté en uso.
    .custom(async (value) => {
      const user = await UserModel.findOne({ email: value });

      if (user) throw new Error("Email already in use");

      return true;
    }),
  body("avatarURL")
    .notEmpty()
    .withMessage("El campo { avatarURL } no debe estar vacio.")
    .isString()
    .withMessage("El campo { avatarURL } debe ser un string.")
    .isURL()
    .withMessage("El campo { avatarURL } debe ser una URL válida."),
  applyValidations,
];

export const loginUserValidations = [
  body("email")
    .notEmpty()
    .withMessage("El campo { email } no debe estar vacio.")
    .isEmail()
    .withMessage("El campo { email } debe ser un email válido."),
  body("password")
    .notEmpty()
    .withMessage("El campo { password } no debe estar vacio.")
    .isString()
    .withMessage("El campo { password } debe ser un string."),
  applyValidations,
];

export const updateUserValidations = [
  param("userId")
    .notEmpty()
    .withMessage("El campo { userId } no debe estar vacio.")
    .isString(),
  body("username")
    .optional()
    .isString()
    .withMessage("El campo { username } debe ser un string."),
  body("password")
    .optional()
    .isString()
    .withMessage("El campo { password } debe ser un string."),
  body("email")
    .optional()
    .isString()
    .withMessage("El campo { email } debe ser un string."),
  body("avatarURL")
    .optional()
    .isURL()
    .withMessage("El campo { avatarURL } debe ser una URL."),
  applyValidations,
];

export const deleteUserValidations = [
  param("userId")
    .notEmpty()
    .withMessage("El campo { userId } no debe estar vacio.")
    .isString(),
  applyValidations,
];
