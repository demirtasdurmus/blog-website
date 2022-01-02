const express = require('express');
const router = express.Router();
const Post = require("../db/models/post");
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');


router.get("/list-posts", catchAsync(async (req, res, next) => {
  const posts = await Post.find({}).populate("owner", { password: 0 })
  res.status(200).send({ status: "success", data: posts });
}));

router.post("/create-post", catchAsync(async (req, res, next) => {
  const { title, content, image, owner } = req.body;
  if (!content) {
    return next(new AppError("Content is mandatory!!!", 400));
  }
  const newPost = new Post(
    {
      title: "kkkkkk",
      content: "llllllllllllllllll",
      image: "mmmmmmmmmmmmmm",
      owner: "60cbb0729b8460279cdd341a"
    }
  );
  await newPost.save();
  res.status(204).send({ status: "success", data: "" });
}));

module.exports = router;
