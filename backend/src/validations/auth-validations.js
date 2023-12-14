import { header } from "express-validator";
import { applyValidations } from "../middlewares/apply-validations.js";

//se crea validacion q exiga la existencia de un header para ingresar a las rutas q esperan recibir un token (user/(reg y log), post/(Create Delete), comment/(Create Update Delete))
export const authHeader = [
  header("authorization")
    .exists()
    .withMessage("Debe enviar el header { Authorization } con el token."),
  applyValidations,
];
