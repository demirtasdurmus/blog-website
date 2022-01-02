const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');


router
  .get("/", postController.getPosts);

router
  .post("/create", postController.createPosts);

module.exports = router;
