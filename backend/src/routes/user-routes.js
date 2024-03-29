import { Router } from "express";
import {
  ctrlRegisterUser,
  ctrlLoginUser,
  ctrlUpdateUser,
  ctrlDeleteUser,
} from "../controllers/user-controller.js";
import { validateToken } from "../middlewares/validate-token.js";
import { authHeader } from "../validations/auth-validations.js";
import {
  deleteUserValidations,
  loginUserValidations,
  registerUserValidations,
  updateUserValidations,
} from "../validations/user-validations.js";

//se crea el enrutador para /user
const userRouter = Router();

//se crean las rutas aplicando el autenticador de header y el validador d tokens + las validaciones de cada controlador
userRouter.post("/register", registerUserValidations, ctrlRegisterUser);
userRouter.post("/login", loginUserValidations, ctrlLoginUser);

userRouter.patch(
  "/:userId",
  authHeader,
  validateToken,
  updateUserValidations,
  ctrlUpdateUser
);
userRouter.delete(
  "/:userId",
  authHeader,
  validateToken,
  deleteUserValidations,
  ctrlDeleteUser
);

//se exporta el enrutador de /user
export { userRouter };
