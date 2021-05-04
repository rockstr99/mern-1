const express = require("express");
const app = express();
const dotenv = require("dotenv");
require("./db/conn");


dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT;

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

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
