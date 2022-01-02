const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router
  .post("/register", userController.registerUser)
  .post("/login", userController.loginUser);

router.post("/google-auth/:idToken", catchAsync(async (req, res, next) => {

}));

router.post("/get-user/:id", catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findOne({ _id: id }, { password: 0 });
  res.status(200).send({ status: "success", data: user });
}));

module.exports = router;
