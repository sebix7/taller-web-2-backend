const { Router } = require("express");
const { registrar } = require("../controllers/auth");
const router = Router();

router.post("/", registrar);

module.exports = router;
