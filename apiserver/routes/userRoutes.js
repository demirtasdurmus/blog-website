const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router
  .post("/register", userController.registerUser)
  .post("/login", userController.loginUser)
  .post("/google-auth/:idToken", userController.googleAuthenticator)

router
  .get("/get-user/:id", userController.getUser);

module.exports = router;
