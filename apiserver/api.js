const api = require("express").Router();
const sampleRouter = require('./routes/sample');
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');


api.use('/', sampleRouter);
api.use('/auth', authRouter);
api.use('/users', usersRouter);

module.exports = api;