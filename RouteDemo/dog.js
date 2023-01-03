const express = require("express");
//↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
const router = express.Router();
//=======================
router.get("/", (req, res) => {
  res.send(`All Dogs`);
});

router.put("/", (req, res) => {
  res.send(`Create Dog`);
});

router.get("/:id", (req, res) => {
  res.send(`SHOW ONE Dog`);
});

router.get("/:id/edit", (req, res) => {
  res.send(`Edit ONE Dog`);
});

module.exports = router;
