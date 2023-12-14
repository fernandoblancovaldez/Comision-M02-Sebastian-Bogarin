import { param, body } from "express-validator";
import { applyValidations } from "../middlewares/apply-validations.js";

export const createCommentValidations = [
  param("postId")
    .notEmpty()
    .withMessage("El campo { postId } no debe estar vacio.")
    .isString(),
  body("description")
    .notEmpty()
    .withMessage("El campo { description } no debe estar vacio.")
    .isString()
    .withMessage("El campo { description } debe ser un string."),
  applyValidations,
];

export const getPostCommentsValidations = [
  param("postId")
    .notEmpty()
    .withMessage("El campo { postId } no debe estar vacio.")
    .isString(),
  applyValidations,
];

export const updateCommentValidations = [
  param("commentId")
    .notEmpty()
    .withMessage("El campo { commentId } no debe estar vacio.")
    .isString(),
  body("description")
    .optional()
    .isString()
    .withMessage("El campo { description } debe ser un string."),
  applyValidations,
];

export const deleteCommentValidations = [
  param("postId")
    .notEmpty()
    .withMessage("El campo { postId } no debe estar vacio.")
    .isString(),
  applyValidations,
  param("commentId")
    .notEmpty()
    .withMessage("El campo { commentId } no debe estar vacio.")
    .isString(),
  applyValidations,
];
