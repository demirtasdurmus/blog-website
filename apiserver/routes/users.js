const express = require('express');
const router = express.Router();
const User = require("../db/models/user");


router.post("/get-user/:id", async (req, res, next) => {
  try {

    const { id } = req.params;
    console.log(typeof (id));
    const user = await User.findOne({ _id: id });

    res.status(200).send({ user });

  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (user.length != 0) {
      const isPasswordCorrect = bcrypt.compareSync(password, user.password);
      if (isPasswordCorrect == true) {
        var token = jwt.sign({ id: user.id, email: user.email }, config.authSecKey);
        res.status(200).send({
          message: "success",
          token: token,
        });

      } else {
        res.status(401).send({
          message: "Your password or username is incorrect!!!"
        });
      }
    } else {
      res.status(401).send({
        message: "Your password or username is incorrect!!!"
      });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post("/google-auth/:token", async (req, res, next) => {
  try {
    const { token } = req.params;

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: config.clientId
    });

    const name = ticket.payload.name ? ticket.payload.name : ticket.payload.given_name;
    const email = ticket.payload.email;

    const user = await User.findOne({ email: email });

    if (user) {
      var tokenX = jwt.sign({ id: user.id, email: user.email }, config.authSecKey);
      return res.status(200).send({
        message: "success",
        token: tokenX,
      });
    } else {
      const newUser = new User(
        {
          name: name,
          email: email,
          password: "google-auth"
        })
      await newUser.save();
      var tokenX = jwt.sign({ id: newUser.id, email: newUser.email }, config.authSecKey);
      return res.status(200).send({
        message: "success",
        token: tokenX,
      });
    }

  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
