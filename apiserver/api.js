const api = require("express").Router();
const postsRouter = require('./routes/posts');
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');


api.use('/auth', authRouter);
api.use('/users', usersRouter);
api.use('/posts', postsRouter);

module.exports = api;