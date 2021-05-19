const express = require("express");
const router = express.Router();
require("../db/conn");

const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send(`Hello world from the server`);
});

router.post("/register",  async(req, res) => {
   const { name, email, phone, work, password, cpassword } = req.body; // destructuring of req.body

 if (!name || !email || !phone || !work || !password || !cpassword) {
     return res.status(422).json({ error: "please fill the field properly... " });
  }

  try {
   const userExist = await User.findOne({ email: email })
        if (userExist) {
                return res.status(422).json({ error: "Email already exist.. " });
               }
      
             const user = new User({name,email,phone,work,password,cpassword});
      const userRegister  = await user.save()

if(userRegister)
{
  res.status(201).json({message: "user registered successfully.. "})
}
    
  } catch (err) {
    console.log(err);
  }
//   
 });


// router.post("/register",  (req, res) => {
//   const { name, email, phone, work, password, cpassword } = req.body; // destructuring of req.body

//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ error: "please fill the field properly... " });
//   }

//   User.findOne({ email: email }).then((userExist) => {
//         if (userExist) {
//           return res.status(422).json({ error: "Email already exist.. " });
//         }

//         const user = new User({name,email,phone,work,password,cpassword,});

//         user.save().then( () => {
//           res.status(201).json({message: "user registered successfully.. ",})
//         })
//         .catch( (err) => {
//           res.status(500).json({error: " user failed to register!",});
//         });
//   })
//   .catch( (err) => {
//         console.log(err);
//   });
// });

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
