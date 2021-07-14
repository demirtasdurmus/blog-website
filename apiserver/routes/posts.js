const express = require('express');
const router = express.Router();
const Post = require("../db/models/post")


router.get("/list-posts", async (req, res, next) => {
  try {
    const posts = await Post.find({}).populate("owner", { password: 0 })
    res.send(posts);
  } catch (err) {
    console.log(err);
  }
})

router.post("/create-post", async (req, res, next) => {
  try {
    // const { name, amount, is_available } = req.body;
    const newPost = new Post(
      {
        title: "kkkkkk",
        content: "llllllllllllllllll",
        image: "mmmmmmmmmmmmmm",
        owner: "60cbb0729b8460279cdd341a"
      }
    );
    await newPost.save();
    res.send(newPost)
  } catch (err) {
    console.log(err);
  }
})

// router.get("/get-sample/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const sample = await Sample.findById(id)
//     res.send(sample);
//   } catch (err) {
//     console.log(err);
//   }
// })

// router.put("/save-sample/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     await Sample.findByIdAndUpdate(id, req.body, { runValidators: true, new: true, useFindAndModify: false });
//     res.send(true);
//   } catch (err) {
//     console.log(err);
//   }
// })

// router.delete("/delete-sample/:id", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     await Sample.findByIdAndDelete(id);
//     res.send(true)
//   } catch (err) {
//     console.log(err);
//   }
// })

module.exports = router;
