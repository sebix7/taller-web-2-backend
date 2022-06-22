const { Router } = require("express");
const { registrar, login } = require("../controllers/auth");
const router = Router();

router.post("/", registrar);
router.post("/login", login);

module.exports = router;
