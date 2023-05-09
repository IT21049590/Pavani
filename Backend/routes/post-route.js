import express from "express";
const router = express.Router();
import multer from "multer";

import {
  addPost,
  viewAll,
  updatePost,
  deletePost,
  getPostById,
} from "../controllers/post-controller.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});
const upload = multer({ storage });

router.post("/addPost", upload.single("image"), addPost);
router.get("/viewAll", viewAll);
router.put("/updatePost/:id", upload.single("image"), updatePost);
router.delete("/deletePost/:id", deletePost);
router.get("/getPostById/:id", getPostById);

export default router;
