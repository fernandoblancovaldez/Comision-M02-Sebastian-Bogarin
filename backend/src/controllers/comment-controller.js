import { CommentModel } from "../models/comment-model.js";
import { PostModel } from "../models/post-model.js";

export const ctrlCreateComment = async (req, res) => {
  const { postId } = req.params;
  const userId = req.user._id;

  try {
    const comment = new CommentModel({
      ...req.body, //se crea nuevo comment con la data traida de body
      author: userId, //se asigna como author el id del user loggeado
    });

    await comment.save();

    const post = await PostModel.findOneAndUpdate(
      { _id: postId }, //paralelamente se edita el posteo buscandolo por id
      { $push: { comments: comment._id } } //y se le incrusta en el array de comments el objectID del comment creado
    );
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    return res.status(201).json(comment);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const ctrlGetPostComments = async (req, res) => {
  const { postId } = req.params;

  try {
    const post = await PostModel.findOne({ _id: postId });
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    return res.status(200).json(post.comments);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const ctrlUpdateComment = async (req, res) => {
  const { commentId } = req.params;
  const userId = req.user._id;

  try {
    const comment = await CommentModel.findOne({
      _id: commentId, //se busca el comentario que coincida con el Id
      author: userId, //y que el author coincida con el userId loggeado para permitir editarlo
    });

    if (!comment) {
      return res.status(404).json({ error: "Comment doesn't exist" });
    }

    comment.set(req.body);

    await comment.save();

    res.status(200).json(comment);
  } catch (error) {
    console.log(error);
    res.sendStatus(500).json({ message: "Couldn't update user" });
  }
};

export const ctrlDeleteComment = async (req, res) => {
  const { postId, commentId } = req.params;
  const userId = req.user._id;

  try {
    const comment = await CommentModel.findOneAndDelete({
      _id: commentId, //se busca el comentario que coincida con el Id
      author: userId, //y que el author coincida con el userId loggeado para permitir eliminarlo
    });
    if (!comment) {
      return res.status(404).json({ error: "Comment doesn't exist" });
    }

    const post = await PostModel.findOneAndUpdate(
      { _id: postId }, //paralelamente se edita el posteo buscandolo por id
      { $pull: { comments: commentId } } //y se le retira dentro del array de comments el commentId traido por params
    );
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500).json({ message: "Couldn't update user" });
  }
};
