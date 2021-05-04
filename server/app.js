const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

//DB connection
const mongoose = require("mongoose");
const DB = process.env.DATABASE;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`connection successful`);
  })
  .catch((err) => {
    console.log(`no connection!`);
  });

//creating middleware

const middleware = (req, res, next) => {
  console.log("hello my middle ware");
  next();
};

app.get("/", (req, res) => {
  res.send(`Hello world from the server`);
});

app.get("/about", middleware, (req, res) => {
  res.send(`this is about page`);
});

app.get("/contact", (req, res) => {
  res.send(`this is contact page`);
});

app.get("/signin", (req, res) => {
  res.send(`this is signin page`);
});

app.get("/signup", (req, res) => {
  res.send("this is signup page");
});

app.listen(3000, () => {
  console.log(`server is running at PORT 3000`);
});
