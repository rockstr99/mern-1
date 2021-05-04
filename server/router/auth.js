const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`Hello world from the server`);
});

router.get("/about", (req, res) => {
  res.send(`this is about page`);
});

router.get("/contact", (req, res) => {
  res.send(`this is contact page`);
});

router.get("/signin", (req, res) => {
  res.send(`this is signin page`);
});

router.get("/signup", (req, res) => {
  res.send("this is signup page");
});

module.exports = router;


