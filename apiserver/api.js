const api = require("express").Router();
const postsRoutes = require('./routes/postRoutes');
const usersRoutes = require('./routes/userRoutes');


api.use('/users', usersRoutes);
api.use('/posts', postsRoutes);

module.exports = api;