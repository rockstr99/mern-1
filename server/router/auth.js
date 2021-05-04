const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`Hello world from the server`);
});

router.post("/register", (req, res) => {
  console.log(req.body);
  res.json({ message: req.body });
  //   res.send("This is my register page..");
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
