import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },

  blogId: {
    type: String,
  },
});

export default mongoose.model("Post", postSchema);
