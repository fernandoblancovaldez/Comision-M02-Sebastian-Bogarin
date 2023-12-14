import { Router } from "express";
import {
  ctrlCreatePost,
  ctrlGetPost,
  ctrlListPosts,
  ctrlDeletePost,
} from "../controllers/post-controller.js";
import { validateToken } from "../middlewares/validate-token.js";
import { authHeader } from "../validations/auth-validations.js";
import {
  createPostValidations,
  deletePostValidations,
  getPostValidations,
} from "../validations/post-validations.js";

const postRouter = Router();

//se crean las rutas aplicando el autenticador de header y el validador d tokens + las validaciones de cada controlador
postRouter.get("/", ctrlListPosts);
postRouter.get("/:postId", getPostValidations, ctrlGetPost);

postRouter.post(
  "/",
  authHeader,
  validateToken,
  createPostValidations,
  ctrlCreatePost
);
postRouter.delete(
  "/:postId",
  authHeader,
  validateToken,
  deletePostValidations,
  ctrlDeletePost
);

export { postRouter };
