const { Router } = require("express");
const router = Router();

router.post("/", (req, res) => {
  res.json({
    msg: "ok",
    env: req.body,
  });
});

module.exports = router;
