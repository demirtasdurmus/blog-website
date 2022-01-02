const mongoose = require("mongoose");

module.exports = () => {
    //connecting mongoose**********************************
    mongoose.connect(`mongodb://localhost:27017/${process.env.DBNAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });

    //Mongoose connection error handling********************
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", () => {
        console.log(`Connected to ${process.env.DBNAME} database`);
    });
};