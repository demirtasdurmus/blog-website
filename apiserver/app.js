
// built in Nodemodules
const path = require("path");
// libraries and frameworks
const express = require("express");
const app = express();
const morgan = require("morgan");
const api = require("./api");
const globalErrorHandler = require("./middleware/globalErrorHandler");
const AppError = require('./utils/appError');
const connectMongoDb = require("./db/index");

console.log("env", process.env.NODE_ENV)
// Development logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
};
// to parse the incoming requests in JSON payloads
app.use(express.json());
// to parse the incoming requests in urlencodedform
app.use(express.urlencoded({ extended: true }));
// to serve the static files
app.use(express.static(path.join(__dirname, '../client/build')));
// connect database
connectMongoDb();

// redirect incoming requests to api.js
app.use("/api", api);

// Always return the main index.html, so react-router render the route in the client
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// global error handler
app.use(globalErrorHandler);

module.exports = app;
