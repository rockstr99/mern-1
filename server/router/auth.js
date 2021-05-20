const express = require("express");
const router = express.Router();
require("../db/conn");
const bcrypt = require("bcryptjs");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send(`Hello world from the server`);
});

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body; // destructuring of req.body

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res
      .status(422)
      .json({ error: "please fill the field properly... " });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already exist.. " });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "Password not matching " });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });

      await user.save();

      res.status(201).json({ message: "user registered successfully.. " });
    }
  } catch (err) {
    console.log(err);
  }
});

//login route

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Please fill all the input fields ... " });
    }
    //DB : UserInput
    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credentials " });
      } else {
        res.json({ message: "User Signin Success!" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credentials " });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
