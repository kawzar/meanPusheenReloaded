const express = require("express");
const router = express.Router();
require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const USER_SECRET = process.env.AUTH_SECRET;

router.post("/signin", function (req, res) {
  User.findOne(
    {
      username: req.body.username,
    },
    function (err, user) {
      if (err) throw err;

      if (!user) {
        res.status(401).send({ success: false, msg: "Authentication failed. User not found." });
      } else {
        // check if password matches
        user.comparePassword(req.body.password, function (err, isMatch) {
          if (isMatch && !err) {
            // if user is found and password is right create a token
            var token = jwt.sign(user.toJSON(), USER_SECRET);
            console.log("token: " + token);
            // return the information including token as JSON
            res.json({ success: true, token: "jwt " + token });
          } else {
            res.status(401).send({ success: false, msg: "Authentication failed. Wrong password." });
          }
        });
      }
    }
  );
});

getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(" ");
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

module.exports = router;
