// Dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Setting Port
const PORT = process.env.PORT || 3001;

// Express
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Connect to MongoDB w/ Mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/exercises", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// Routes
const apiRouter = require("./routes/apiRoutes.js");
const htmlRouter = require("./routes/htmlRoutes.js");

app.use(apiRouter);
app.use(htmlRouter);

// Starting Server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
