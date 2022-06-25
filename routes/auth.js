const { Router } = require("express");
const { registrar, login, validar } = require("../controllers/auth");
const router = Router();

router.post("/", registrar);
router.post("/login", login);
router.post("/validar", validar);

module.exports = router;
