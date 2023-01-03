const express = require("express");
//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
const router = express.Router();
//=======================

router.use((req, res, next) => {
  if (req.query.isAdmin) {
    next();
  } else {
    res.send(`Sorry you're not an admin`);
  }
});

router.get("/", (req, res) => {
  res.send("Welcome to Admin Route ☺♂");
});

router.get("/topsecret", (req, res) => {
  res.send("This is top secret");
});

router.get("/deleteeverything", (req, res) => {
  res.send("OK DELETED ALL!!!!!!!!");
});

module.exports = router;
