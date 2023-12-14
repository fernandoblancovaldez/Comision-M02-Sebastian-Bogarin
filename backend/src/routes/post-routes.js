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
