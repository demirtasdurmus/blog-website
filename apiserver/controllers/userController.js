var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../db/models/user");
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_AUTH_CLIENT_ID);
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

// register user
exports.registerUser = catchAsync(async (req, res, next) => {
    const { name, email, password } = req.body;
    const user = await User.find({ email: email });
    if (user.length == 0) {
        const newPass = bcrypt.hashSync(password, 8)
        const newUser = new User(
            {
                name: name,
                email: email,
                password: newPass
            })
        await newUser.save();
        res.status(204).send({
            status: "success",
            data: ""
        });
    } else {
        return next(new AppError("This email has already been taken..!", 400));
    }
});

// login user
exports.loginUser = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (user.length != 0) {
        const isPasswordCorrect = bcrypt.compareSync(password, user.password);
        if (isPasswordCorrect == true) {
            var token = jwt.sign({ id: user.id, email: user.email }, process.env.AUTH_SECRET_KEY);
            res.status(200).send({
                status: "success",
                token: token,
            });
        } else {
            return next(new AppError("Your password or username is incorrect!!!", 400));
        }
    } else {
        return next(new AppError("Your password or username is incorrect!!!", 400));
    }
});

// login with Google
exports.googleAuthenticator = catchAsync(async (req, res, next) => {
    const { idToken } = req.params;
    const ticket = await client.verifyIdToken({
        idToken: idToken,
        audience: process.env.GOOGLE_AUTH_CLIENT_ID
    });

    if (!ticket) {
        return next(new AppError("Something went wrong!!!", 400));
    };

    const name = ticket.payload.name ? ticket.payload.name : ticket.payload.given_name;
    const email = ticket.payload.email;

    const user = await User.findOne({ email: email });

    if (user) {
        var token = jwt.sign({ id: user.id, email: user.email }, process.env.AUTH_SECRET_KEY);
        return res.status(200).send({
            status: "success",
            token: token,
        });
    } else {
        const newUser = new User(
            {
                name: name,
                email: email,
                password: "google-auth"
            })
        await newUser.save();
        var token = jwt.sign({ id: newUser.id, email: newUser.email }, process.env.AUTH_SECRET_KEY);
        return res.status(200).send({
            status: "success",
            token: token,
        });
    }
});

// get user
exports.getUser = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const user = await User.findOne({ _id: id }, { password: 0 });
    res.status(200).send({ status: "success", data: user });
});