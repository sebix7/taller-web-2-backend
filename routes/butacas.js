const { Router } = require("express");
const Butacas = require("../models/Butacas");
const router = Router();

router.get("/", (req, res) => {
  res.json(Butacas.obtenerButacas());
});

module.exports = router;