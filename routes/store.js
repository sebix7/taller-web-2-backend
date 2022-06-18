const { Router } = require("express");
const Store = require("../models/Store");
const router = Router();

router.get("/", (req, res) => {
  res.json(Store.obtenerProductos());
});

module.exports = router;