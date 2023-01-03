const express = require("express");
//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
const router = express.Router();
//=======================

router.get("/", (req, res) => {
  res.send(`All Shelters`);
});

router.put("/", (req, res) => {
  res.send(`Create Shelter`);
});

router.get("/:id", (req, res) => {
  res.send(`SHOW ONE Shelter`);
});

router.get("/:id/edit", (req, res) => {
  res.send(`Edit ONE Shelter`);
});

module.exports = router;
