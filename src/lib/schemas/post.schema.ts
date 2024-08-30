import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: String,
  postDate: Date,
  content: String,
  hashtags: [String],
});

export const Post = mongoose.model("Post", PostSchema);
