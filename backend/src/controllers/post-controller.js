import { PostModel } from "../models/post-model.js";

export const ctrlCreatePost = async (req, res) => {
  const userId = req.user._id;

  try {
    const post = new PostModel({
      ...req.body,
      author: userId,
    });

    await post.save();

    return res.status(201).json(post);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const ctrlListPosts = async (_req, res) => {
  try {
    const allPosts = await PostModel.find();
    if (!allPosts) return res.status(404).json({ error: "Posts not found" });

    return res.status(200).json(allPosts);
  } catch (error) {
    return res.status(500).json({ error: "Couldn't get posts" });
  }
};

export const ctrlGetPost = async (req, res) => {
  const { postId } = req.params;

  try {
    const post = await PostModel.findOne({ _id: postId });
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const ctrlDeletePost = async (req, res) => {
  const { postId } = req.params;

  try {
    const post = await PostModel.findOneAndDelete({ _id: postId });
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500).json({ message: "Couldn't delete post" });
  }
};

export const isAuthor = async ({ postId, userId }) => {
  try {
    const post = await PostModel.findOne({
      _id: postId,
      author: userId,
    });

    if (!post) {
      return false;
    }

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
