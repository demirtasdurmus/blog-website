const express = require('express');
const router = express.Router();
const User = require("../db/models/user");


router.post("/get-user/:id", async (req, res, next) => {
  try {

    const { id } = req.params;
    const user = await User.findOne({ _id: id }, { password: 0 });
    res.status(200).send({ user });

  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
