import express from "express";
import Post from "../models/post.js";

export const addPost = async (req, res) => {
  //let userId = req.params.id;
  let file = "N/A";
  if (req.file) {
    file = req.file.filename;
  }
  const prefix = "BID";
  const B_ID = prefix + Date.now();
  const description = req.body.description;
  const blogId = B_ID;
  console.log(req.body);

  const newPost = new Post({
    description,
    image: file,
    blogId,
  });
  console.log(newPost);
  newPost
    .save()
    .then(() => {
      res.json("Post Added");
    })
    .catch((err) => {
      console.log(err);
    });
};
// export const viewPosts = async (req, res, next) => {
//   let userId1 = req.params.id;
//   await Post.find({ SellerId: userId1 })
//     .then((Post) => {
//       res.json(Post);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
export const viewAll = async (req, res, next) => {
  await Post.find()
    .then((Post) => {
      res.json(Post);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const updatePost = async (req, res) => {
  let userId = req.params.id;
  const { description } = req.body;

  const updatePost = {
    description,
  };
  if (req.file) {
    updatePost.image = req.file.filename;
  }
  const update = await Post.findByIdAndUpdate(userId, updatePost)
    .then(() => {
      res.status(200).send({ status: "Post updated " });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error with updating Post", error: err.message });
    });
};
export const deletePost = async (req, res) => {
  let userId = req.params.id;
  await Post.findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({ status: "Post deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with delete Post", error: err.message });
    });
};

export const getPostById = async (req, res) => {
  let id = req.params.id;
  await Post.findById(id)
    .then((response) => {
      res.status(200).json(response);
      console.log(res);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ status: "Error with get Post", error: err.message });
    });
};
