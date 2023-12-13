import { Router } from "express";
import {
  ctrlRegisterUser,
  ctrlLoginUser,
  ctrlUpdateUser,
  ctrlDeleteUser,
} from "../controllers/user-controller.js";

//se crea el enrutador para /user
const userRouter = Router();

userRouter.post("/register", ctrlRegisterUser);
userRouter.get("/login", ctrlLoginUser);

userRouter.patch("/:userId", ctrlUpdateUser);
userRouter.delete("/:userId", ctrlDeleteUser);

//se exporta el enrutador de /user
export { userRouter };
