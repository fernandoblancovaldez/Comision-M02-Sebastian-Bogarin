import { Router } from "express";
import {
  ctrlGetPostComments,
  ctrlDeleteComment,
  ctrlCreateComment,
  ctrlUpdateComment,
} from "../controllers/comment-controller.js";
import { validateToken } from "../middlewares/validate-token.js";
import { authHeader } from "../validations/auth-validations.js";
import {
  createCommentValidations,
  deleteCommentValidations,
  getPostCommentsValidations,
  updateCommentValidations,
} from "../validations/comment-validations.js";

const commentRouter = Router();

//se crean las rutas aplicando el autenticador de header y el validador d tokens + las validaciones de cada controlador
commentRouter.get("/:postId", getPostCommentsValidations, ctrlGetPostComments);

commentRouter.post(
  "/:postId",
  authHeader,
  validateToken,
  createCommentValidations,
  ctrlCreateComment
);
commentRouter.patch(
  "/:commentId",
  authHeader,
  validateToken,
  updateCommentValidations,
  ctrlUpdateComment
);
commentRouter.delete(
  "/:postId/:commentId",
  authHeader,
  validateToken,
  deleteCommentValidations,
  ctrlDeleteComment
);

export { commentRouter };
