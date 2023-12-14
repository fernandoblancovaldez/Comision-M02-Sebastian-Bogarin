import { validationResult } from "express-validator";

//se crea y exporta el middleware que verifica errores en la validacion aplicada con express-validator
//si el array errors esta vacío se continúa al siguiente middleware
export const applyValidations = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json(errors.array());
  next();
};
