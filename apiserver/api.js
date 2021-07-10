const api = require("express").Router();
const sampleRouter = require('./routes/sample');
const usersRouter = require('./routes/users');


api.use('/', sampleRouter);
api.use('/users', usersRouter);

module.exports = api;