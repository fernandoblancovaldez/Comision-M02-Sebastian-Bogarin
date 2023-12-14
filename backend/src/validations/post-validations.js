import { param, body } from "express-validator";
import { applyValidations } from "../middlewares/apply-validations.js";
import { PostModel } from "../models/post-model.js";

export const createPostValidations = [
  body("title")
    .notEmpty()
    .withMessage("El campo { title } no debe estar vacio.")
    .isString()
    .withMessage("El campo { title } debe ser un string.")
    // validación personalizada para verificar que el title no esté en uso.
    .custom(async (value) => {
      const user = await PostModel.findOne({ title: value });

      if (user) throw new Error("Title already in use");

      return true;
    }),
  body("description")
    .notEmpty()
    .withMessage("El campo { description } no debe estar vacio.")
    .isString()
    .withMessage("El campo { description } debe ser un string."),
  body("imageURL")
    .notEmpty()
    .withMessage("El campo { imageURL } no debe estar vacio.")
    .isString()
    .withMessage("El campo { imageURL } debe ser un string.")
    .isURL()
    .withMessage("El campo { imageURL } debe ser una URL válida."),
  applyValidations,
];

export const getPostValidations = [
  param("postId")
    .notEmpty()
    .withMessage("El campo { postId } no debe estar vacio.")
    .isString(),
  applyValidations,
];

export const deletePostValidations = [
  param("postId")
    .notEmpty()
    .withMessage("El campo { postId } no debe estar vacio.")
    .isString(),
  applyValidations,
];
